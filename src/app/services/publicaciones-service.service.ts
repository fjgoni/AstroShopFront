import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIDataModel } from 'src/models/APIDataModel';
import { environment } from '../../environments/environment';
 
const endpoint = environment.apiUrl + 'Publicacion/';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http : HttpClient) { }


  GetPublicaciones(){
    return this.http.get<APIDataModel>(endpoint + `GetAll`);
  }

}