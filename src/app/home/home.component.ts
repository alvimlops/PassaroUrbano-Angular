import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] | undefined;

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
   // this.ofertas = this.ofertaService.getOfertas()
   this.ofertaService.getOfertas2()
   .then(( ofertas: Oferta[]) => {
     this.ofertas = this.ofertas
   })
  }

}
