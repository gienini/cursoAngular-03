import { Component, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino : string = 'Hola mundo';
  hayError : boolean = false;
  placeHolder : string = "Buscar capitales...";
  @Output() capitales : Country[] = [];

  buscar( termino : string ): void{
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarCapital(this.termino).subscribe(capitales => {
      console.log(capitales[0].languages);
      this.capitales = capitales;
      
      
    }, err => {
      this.hayError = true;
      this.capitales = []
    }
    );
  }

  sugerencias(event : any){
    this.hayError = false;
  }
  constructor(private paisService : PaisService) { }
  ngOnInit(): void {
  }

}
