import { AbstractControl, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';

export function emailValidator() {
  // tslint:disable-next-line:max-line-length
  const objRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (control: AbstractControl): { [key: string]: any } => {
    const correoValido = control.value ? objRegExp.test(control.value) : true;
    return !correoValido ? { invalidEmail: { value: control.value } } : null;
  };
}

export function alphanumericValidator() {
  const objRegExp = /^[A-Za-z0-9]+$/i;
  return (control: AbstractControl): { [key: string]: any } => {
    const alfanumericoDocValido = control.value ? objRegExp.test(control.value.trim()) : true;
    return !alfanumericoDocValido ? { invalidCharacters: { value: control.value } } : null;
  };
}
export function sizeCharacterValidator(size: number) {
  return (control: AbstractControl): { [key: string]: any } => {
    const validSize = control.value ? control.value.length !== size : false;
    return validSize ? { invalidSize: { value: control.value } } : null;
  };
}
