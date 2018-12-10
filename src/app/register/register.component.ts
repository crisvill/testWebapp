import { Subject, forkJoin } from 'rxjs';
import { LocationService } from './../shared/services/location.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { emailValidator, alphanumericValidator } from '@app/shared/utils/validators';
import { takeUntil, finalize } from 'rxjs/operators';
import { ListType } from '@app/core/models/user.model';
import { UserService } from '@app/shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger, AuthenticationService } from '@app/core';

const log = new Logger('Login');
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  documentTypesList: ListType[];
  isLoading = false;
  loadedData = false;
  countries: any[];
  departments: any[];
  cities: string[];
  subs: Subject<void> = new Subject<void>();
  displayDialog = false;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    public bsModalRef: BsModalRef,
    private readonly locationService: LocationService,
    private readonly documentsService: UserService,
    private readonly authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.createForm();
    this.loadInitialData();
  }

  saveUser() {
    this.displayDialog = true;
  }
  redirectHome() {
    this.authenticationService
      .login(this.form.value)
      .pipe(
        finalize(() => {
          this.form.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        credentials => {
          log.debug(`${credentials.username} successfully logged in`);
          this.route.queryParams.subscribe(params => {
            this.router.navigate([params.redirect || '/'], { replaceUrl: true });
            this.bsModalRef.hide();
          });
        },
        error => {
          log.debug(`Login error: ${error}`);
        }
      );
  }

  loadInitialData() {
    forkJoin(this.locationService.getCountriesList(), this.documentsService.getDocumentsTypes()).subscribe(
      ([countries, documents]) => {
        this.countries = countries;
        this.documentTypesList = documents;
        this.loadedData = true;
      },
      err => console.log('Ha ocurrido un error en la carga de los servicios.: ', err)
    );
  }

  loadDepartments(countryCode: string) {
    this.locationService
      .getDeparmentList(countryCode)
      .subscribe(
        (departments: ListType[]) => (this.departments = departments),
        err => console.log('Error cargando departamentos: ', err)
      );
  }

  loadCities(countryCode: string, deparmentCode: string) {
    this.locationService
      .getCitiesList(countryCode, deparmentCode)
      .subscribe((cities: string[]) => (this.cities = cities), err => console.log('Error cargando ciudades: ', err));
  }

  onChangeCountry() {
    this.form
      .get('country')
      .valueChanges.pipe(takeUntil(this.subs))
      .subscribe((value: any) => {
        this.loadDepartments(value.code);
      });
  }

  onChangeDepartment() {
    this.form
      .get('department')
      .valueChanges.pipe(takeUntil(this.subs))
      .subscribe((value: any) => {
        const countryCode = this.form.get('country').value.code;
        this.loadCities(countryCode, value.code);
      });
  }

  onChangeDocumentType() {
    this.form
      .get('documentType')
      .valueChanges.pipe(takeUntil(this.subs))
      .subscribe((value: any) => {
        if (value.code === 'TI') {
          this.addTutor();
        } else {
          this.removeTutor();
        }
      });
  }

  createForm() {
    this.form = this.fb.group({
      documentType: ['', Validators.required],
      document: ['', [Validators.required, Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.maxLength(50), emailValidator()]],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      country: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.onChangeCountry();
    this.onChangeDocumentType();
    this.onChangeDepartment();
  }

  addTutor() {
    this.form.addControl('documentTypeT', this.fb.control('', Validators.required));
    this.form.addControl('documentT', this.fb.control('', [Validators.required, Validators.maxLength(50)]));
    this.form.addControl('phoneT', this.fb.control('', [Validators.required, Validators.maxLength(15)]));
    this.form.addControl(
      'nameT',
      this.fb.control('', [Validators.required, alphanumericValidator(), Validators.maxLength(50)])
    );
    this.form.updateValueAndValidity();
  }

  removeTutor() {
    this.form.removeControl('documentTypeT');
    this.form.removeControl('documentT');
    this.form.removeControl('phoneT');
    this.form.removeControl('nameT');
  }

  userHaveTutor() {
    return this.form.get('documentType').value.code === 'TI';
  }

  /** Completa las subscripciones a los cambios del "form" para evitar perdida de memoria */
  ngOnDestroy() {
    this.subs.next();
    this.subs.complete();
  }
}
