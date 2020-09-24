import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComercioService } from '../../services/comercio.service';
import { Comercio } from '../../model/comercio';

@Component({
  selector: 'ngx-comercios-elements',
  templateUrl: 'comercios.component.html',
  styleUrls: ['comercios.component.scss'],
  providers: [ComercioService]
})
export class ComerciosComponent {

  comercios: Array<Comercio>;

  constructor(
    private router: Router,
    private comercioSer: ComercioService)
  {
    this.comercios = new Array<Comercio>();
    this.comercioSer.obtenerComercios().subscribe(
      (data: Array<Comercio>) => {
        this.comercios = data;
      },
      err => console.log(err)
    );
  }

  public eliminarComercio(comercioAeliminar: Comercio) {
    //console.log("Eliminando " + comercio);
    this.comercioSer.eliminarComercio(comercioAeliminar);
    this.router.navigate(['/pages/comercios']);
  }

  public goToAgregar() {
    this.router.navigate(['/pages/agregar']);
  }

  public goToEditar(comercioAactualizar: Comercio) {
    this.router.navigate(['/pages/editar', comercioAactualizar.id]);
  }
}