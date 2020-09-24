import { Component } from '@angular/core';
import { ComercioService } from '../../services/comercio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-agregar',
  templateUrl: 'agregar.component.html',
  providers: [ComercioService]
})
export class AgregarComponent {

  comercioFormulario: any = {
    nombre: '',
    direccion: '',
    telefono: '',
    tipo: 'pizzas'
  }

  constructor(
    private _comercioService: ComercioService,
    private router: Router) {
  }

  publicarComercio() {
    //console.log("Agregando: " + this.comercioFormulario.tipo);
    this._comercioService.publicarComercio(this.comercioFormulario);
    this.router.navigate(['/pages/comercios']);
  }
}