import { Component } from '@angular/core';
import { ComercioService } from '../../services/comercio.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'ngx-subir',
  templateUrl: 'subir.component.html',
  providers: [ComercioService]
})
export class SubirComponent {

  static readonly folder = '/mis_archivos/';

  constructor(
    private storage: AngularFireStorage,
    private _comercioService: ComercioService,
    private router: Router) {
  }

  publicarComercio() {
    this.router.navigate(['/pages/comercios']);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = SubirComponent.folder + file.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    //console.log("path: " + file.name);
  }

}