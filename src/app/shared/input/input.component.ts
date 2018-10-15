import { Component, OnInit, Input, ContentChild, AfterContentInit, forwardRef } from '@angular/core';
import { NgModel, NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  @Input() label: string;
  @Input() errorMessage: string;
  @ContentChild(NgModel) model: NgModel;
  @Input() typeField: string;

  field: any;
  value: any
  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.field = this.model;

    if (this.field === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva NgModel.');
    }
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    console.log(obj)
    this.value = obj;
  }

  registerOnChange(fn: any): void{
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void{}

  setDisabledState?(isDisabled: boolean): void{}

}
