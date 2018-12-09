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
  const objRegExp = /^[A-Za-z0-9]+$/;
  return (control: AbstractControl): { [key: string]: any } => {
    const alfanumericoDocValido = control.value ? objRegExp.test(control.value) : true;
    return !alfanumericoDocValido ? { invalidCaracters: { value: control.value } } : null;
  };
}

export function regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (!control.value) {
      return null;
    }
    const value = control.value && control.value.toString();
    const valid = regex.test(value);
    return valid ? null : error;
  };
}

export function decimalFormatValidador(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const decimalFormatRegEx: RegExp = /^\d+(\.[0-9]+)?$/;
    if (!decimalFormatRegEx.test('' + control.value)) {
      return { decimalFormatError: true };
    }
    const regExp: RegExp = /^\d+(\.[0-9]{1,2})?$/;
    const esFraccionValida = control.value ? regExp.test('' + control.value) : true;
    return esFraccionValida ? null : { maxDecimals: true };
  };
}

export function decimalValidador(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const regExp: RegExp = /^\d+(\.[0-9]{1,2})?$/;
    const esFraccionValida = control.value ? regExp.test('' + control.value) : true;
    return esFraccionValida ? null : { esFraccionValida: true };
  };
}

export function decimalValidadorConVacio(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const regExp: RegExp = /^[\d]+\.?([0-9]{1,2})?$/;
    const esFraccionValida = regExp.test('' + control.value);
    return esFraccionValida || control.value === '' ? null : { esFraccionValida: true };
  };
}

export function validarTypeahead(items: any, field: string) {
  return (control: AbstractControl): { [key: string]: any } => {
    const notFound = items && items.length > 0 ? items.some((f: any) => f[field] === control.value) : undefined;
    return !notFound ? { typeaheadNotFound: { value: control.value } } : null;
  };
}
