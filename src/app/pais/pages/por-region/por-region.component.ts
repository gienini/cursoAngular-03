import { Component, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  hayError : boolean = false;
  placeHolder : string = "Buscar regiones...";

  regiones : string [] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC',];
  @Output() paises : Country[] = [];

  regionActiva : string = "";

  activarRegion ( region : string){
    if (this.regionActiva === region ){
      return;
    }
    this.regionActiva = region;
    this.paises = []
    this.paisService.buscarRegion(region.toLowerCase()).subscribe(paises => {
      console.log(paises[0].languages);
      this.paises = paises;
      
      
    }, err => {
      this.hayError = true;
      this.regiones = []
    }
    );
  }

  getClaseCSS(region :string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  // buscar( termino : string ): void{
  //   this.termino = termino;
  //   this.hayError = false;
  // }

  sugerencias(event : any){
    this.hayError = false;
  }
  constructor(private paisService : PaisService) { }

}
