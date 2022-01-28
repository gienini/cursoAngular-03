import { Component, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li { cursor:pointer}`
  ]
})
export class PorPaisComponent {

  termino : string = 'Hola mundo';
  hayError : boolean = false;
  placeHolder : string = "Buscar paises...";
  @Output() paises : Country[] = [];
  paisesSugeridos : Country[] = [];  
  mostrarSugerencia : boolean = false;

  buscar( termino : string ): void{
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(paises => {
      console.log(paises[0].languages);
      this.paises = paises;
      
      
    }, err => {
      this.hayError = true;
      this.paises = []
    }
    );
  }

  sugerencias(event : string){
    if (event === ""){
      this.mostrarSugerencia = false;
      return;
    }
    this.termino = event;
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(resp =>{
      this.paisesSugeridos = resp.splice(0,5);
    },
    (err) =>{
      this.paisesSugeridos = [];
    })
    this.mostrarSugerencia = true;
  }

  buscarSugerido(termino : string){
    this.buscar(termino);
    this.mostrarSugerencia = false;
  }
  constructor(private paisService : PaisService) { }

}
