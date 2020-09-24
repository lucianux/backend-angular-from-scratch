import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercio } from '../../model/comercio';
import { ComercioService } from '../../services/comercio.service';

@Component({
  selector: 'ngx-editar',
  templateUrl: 'editar.component.html',
  providers: [ComercioService]
})
export class EditarComponent implements OnInit {

  comercioEditable: Comercio;
  comercioLoaded: Promise<boolean>;

  constructor(
    private rutaActiva: ActivatedRoute,
    private comercioS: ComercioService,
    private router: Router) { }

  ngOnInit() {
    var uid: string = this.rutaActiva.snapshot.params.uid;
    this.comercioS.obtenerComercio(uid).subscribe(
      (value: Comercio) => {
        this.comercioEditable = new Comercio();
        this.comercioEditable = value;
        this.comercioEditable.id = uid;
        //console.log("Comercio a editar ", this.comercioEditable);
        this.comercioLoaded = Promise.resolve(true);
      }
    );
  }

  public actualizarComercio(actualizado: Comercio) {
    this.comercioS.actualizarComercio(actualizado);
    this.router.navigate(['/pages/comercios']);
  }

}