import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '@app/register/register.component';
import { ModalModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    LoginRoutingModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    DropdownModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  entryComponents: [RegisterComponent]
})
export class LoginModule {}
