import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var target = document.querySelector('.tw'); 
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'blue'
    })
    
    writer
      .type('Compra y venta de artículos en línea al mejor precio.')
      .rest(500)
      .changeOps({ deleteSpeed: 10 })
      .start()
  }

}
