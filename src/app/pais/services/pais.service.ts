import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL : string = 'https://restcountries.com';
  private nameChunk : string = '/v3.1/name/';
  private regionChunk : string = '/v2/regionalbloc/';
  private capitalChunk : string = '/v3.1/capital/';
  private alphaChunk : string = '/v3.1/alpha/';
  private fieldsChunk : string = 'name,population,cca2,flags,alpha2Code';

  params : HttpParams = new HttpParams().set('fields', this.fieldsChunk);
  constructor(private httpClient : HttpClient) { }


  buscarPais ( termino : string) : Observable<Country[]>{
    const url = `${ this.apiURL}${this.nameChunk}${termino}`;
    return this.httpClient.get<Country[]>(url, {params : this.params});
  }

  buscarRegion ( termino : string) : Observable<Country[]>{
    const url = `${ this.apiURL}${this.regionChunk}${termino}`;
    return this.httpClient.get<Country[]>(url, {params : this.params});
  }

  buscarCapital ( termino : string) : Observable<Country[]>{
    const url = `${ this.apiURL}${this.capitalChunk}${termino}`;
    return this.httpClient.get<Country[]>(url, {params : this.params});
  }



  getPaisPorAlpha( id : string ){
    const url = `${ this.apiURL}${this.alphaChunk}${id}`;
    return this.httpClient.get<Country>(url);
  }

  
}
