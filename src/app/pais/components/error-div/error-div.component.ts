import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-div',
  templateUrl: './error-div.component.html'
})
export class ErrorDivComponent implements OnInit {

  @Input() hayError : boolean = false;
  @Input() termino : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
