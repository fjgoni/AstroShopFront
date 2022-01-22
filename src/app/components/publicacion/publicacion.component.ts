import { Component, Input, OnInit } from '@angular/core';
import { ConceptoService } from 'src/app/services/concepto-service.service';
import { PublicacionesService } from 'src/app/services/publicaciones-service.service';
import { APIDataModel } from 'src/models/APIDataModel';
import { Publicacion } from 'src/models/Publicacion';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  @Input() publicacion : Publicacion;
  constructor(private _conceptoService: ConceptoService, private _publicacionService : PublicacionesService) { }

  ngOnInit(): void {
  }

}
