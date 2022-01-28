import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import {switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private paisService : PaisService) { }

  pais! : Country;

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log )
    ).subscribe( pais => {
      this.pais = pais[0];
    });



    // this.activatedRoute.params
    //   // .subscribe(params => {
    //   //   console.log(params.id);
    //   // });
    //   .subscribe(({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorAlpha(id).subscribe( pais => {

    //     });
    //   });
  }

}
