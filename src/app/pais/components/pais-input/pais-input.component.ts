import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  constructor() { }

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  @Input() placeHolder : string = "";


  debouncer : Subject<string> = new Subject();

  termino : string = '';
  buscar(): void{
    this.onEnter.emit(this.termino);
  }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(valor => {
      this.onDebounce.emit(valor)
    })
  }


  teclaPresionada () {
    this.debouncer.next(this.termino);

  }

}
