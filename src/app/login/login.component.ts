import { RegisterComponent } from './../register/register.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private modalService: BsModalService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.isLoading = true;

    /*  this.authenticationService
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
      ); */
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
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
      documentType: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', [Validators.required]],
      phone: ['', Validators.required]
    });
  }
}
