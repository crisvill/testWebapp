import { ListType } from '@app/core/models/user.model';
import { UserService } from '@app/shared/services/user.service';
import { RegisterComponent } from './../register/register.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { emailValidator, sizeCharacterValidator } from '@app/shared/utils/validators';
import { finalize } from 'rxjs/operators';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  bsModalRef: BsModalRef;
  documentsTypes: ListType[];
  loadedData = false;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly i18nService: I18nService,
    private readonly authenticationService: AuthenticationService,
    private readonly modalService: BsModalService,
    private readonly documentsService: UserService
  ) {}

  ngOnInit() {
    this.loadInitialData();
    this.createForm();
  }

  loadInitialData() {
    this.documentsService.getDocumentsTypes().subscribe(
      documents => {
        this.documentsTypes = documents;
        this.loadedData = true;
      },
      err => console.log('Error en carga de lista de tipos de documentos: ', err)
    );
  }

  login() {
    this.isLoading = true;

    this.authenticationService
      .login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        credentials => {
          log.debug(`${credentials.username} successfully logged in`);
          this.route.queryParams.subscribe(params =>
            this.router.navigate([params.redirect || '/'], { replaceUrl: true })
          );
        },
        error => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  openRegisterModal() {
    const initialState = {
      class: 'modal-lg',
      list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
      title: 'Registro de Usuario'
    };
    this.bsModalRef = this.modalService.show(RegisterComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      documentType: ['', Validators.required],
      document: ['', [Validators.required, sizeCharacterValidator(13)]],
      email: ['', [Validators.required, Validators.maxLength(50), emailValidator()]],
      phone: ['', [Validators.required, Validators.maxLength(15)]]
    });
  }
}
