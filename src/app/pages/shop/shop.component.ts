import { Component, OnInit } from '@angular/core';
import { ConceptoService } from 'src/app/services/concepto-service.service';
import { PublicacionesService } from 'src/app/services/publicaciones-service.service';
import { APIDataModel } from 'src/models/APIDataModel';
import { Publicacion } from 'src/models/Publicacion';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cargando : boolean = true;
  publicaciones : Publicacion [] = [];
  data : APIDataModel;
  error = '';
  constructor(private _conceptoService: ConceptoService, private _publicacionService : PublicacionesService) { }
  
  ngOnInit(): void {
   this.loadPublicaciones().then(promise => this.loadConceptos());
  }



  loadPublicaciones() : Promise<void>{
    return new Promise<void>((resolve, reject) => {
      this._publicacionService.GetPublicaciones().subscribe((resp:APIDataModel) => {
        if (resp.status != null) {
          this.cargando = false;
          this.data = resp;
  
          if (this.data.status != "200") {
            this.error = this.data.errMessage;
            return;
          }
          this.publicaciones = JSON.parse(resp.data);
          resolve();
        }
      }, (err: any) => {
        this.error = err.message;
        this.cargando = false;
        reject();
      });
    });

  
  }

  loadConceptos(){
    this.publicaciones.forEach(publicacion => {
      this._conceptoService.GetConcepto(publicacion.ConceptoID).subscribe((respConcepto:APIDataModel) => {
        if (respConcepto.status != "200") {
          this.error = respConcepto.errMessage;
          return;
        }
        publicacion.Concepto = JSON.parse(respConcepto.data);
      },(err: any) => {
        this.error = err.message;
        this.cargando = false;
      });
    });
  }


}
