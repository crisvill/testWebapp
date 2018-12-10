import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

const eventTarget = '$event.target.value';
@Directive({
  selector: '[appType=phone]'
})
export class PhoneDirective implements ControlValueAccessor, OnInit {
  phoneRegex = /(\d)(?=(\d{3})+(?!\d))/g;
  phoneSymbol = '+';

  _el: ElementRef;
  _renderer: Renderer2;

  onChange = (value: any) => {};
  onTouched = () => {};

  // tslint:disable-next-line:member-ordering
  constructor(private readonly el: ElementRef, private renderer: Renderer2) {
    this._el = el;
    this._renderer = renderer;
  }

  ngOnInit(): void {
    this._renderer.setStyle(this._el.nativeElement, 'text-align', 'right');
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: Event) {
    const e = event as KeyboardEvent;
    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  @HostListener('keyup', [eventTarget]) onKeyUp(value: any) {
    value.replace(this.phoneSymbol, '');
    this.onChange(this.phoneRegex.test(value) ? Number(value) : value);
  }

  @HostListener('blur', [eventTarget]) onBlur(value: any) {
    this._el.nativeElement.value = value + this.phoneSymbol;
    this.onTouched();
  }

  @HostListener('focus', [eventTarget]) onFocus(value: any) {
    this._el.nativeElement.value = value.replace(this.phoneSymbol, '');
  }

  writeValue(value: number): void {
    if (isNaN(value)) {
      this._el.nativeElement.value = this.phoneSymbol;
    } else {
      this._el.nativeElement.value = value + this.phoneSymbol;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._el.nativeElement.disabled = isDisabled;
  }

  cleanFormat(value: string): string {
    return value ? value.replace(this.phoneSymbol, '').trim() : '';
  }

  format(value: string): string {
    return value ? this.phoneSymbol + value : '';
  }
}
