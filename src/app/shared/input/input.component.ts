import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @ContentChild(NgModel) model: NgModel;

  field: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {

    this.field = this.model;

    if (this.field === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva NgModel.');
    }
  }

}
