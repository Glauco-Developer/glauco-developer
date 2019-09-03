import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit, AfterContentInit{

  @Input() label: string;
  @ContentChild(FormControlName) control: FormControlName;

  input: any;

  constructor() { }

  ngOnInit() {
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

  ngAfterContentInit(){
    this.input = this.control;
  }

}
