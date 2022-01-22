import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIDataModel } from 'src/models/APIDataModel';
import { environment } from '../../environments/environment';
 
const endpoint = environment.apiUrl + 'Concepto/';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {

  constructor(private http : HttpClient) { }


  GetConcepto(concepto_id : number){
    return this.http.get<APIDataModel>(endpoint + `${concepto_id}`);
  }

  GetAllConceptos(){
    return this.http.get(endpoint + 'GetAllBarcosSocio');
  }

  getConsultaPileta(N_Socio: number) {
    return this.http.get(endpoint + `ConsulAbonosPiletas?N_Socio=${N_Socio}`);
  }
}