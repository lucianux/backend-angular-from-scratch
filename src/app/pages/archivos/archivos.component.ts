import { Component } from '@angular/core';
import { ComercioService } from '../../services/comercio.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
    selector: 'ngx-archivos',
    templateUrl: 'archivos.component.html',
    styleUrls: ['archivos.component.scss'],
    providers: [ComercioService]
})
export class ArchivosComponent {

    static readonly folder = '/mis_archivos/';
    files: Array<any>;

    constructor(
        private storage: AngularFireStorage,
        private _comercioService: ComercioService,
        private router: Router) {
        const ref = this.storage.ref(ArchivosComponent.folder + 'imagen.png');

        const root = this.storage.ref(ArchivosComponent.folder);
        let list: Observable<firebase.storage.ListResult> = root.listAll();
        list.subscribe(data => {
            //console.log(data.items[0].name);
            console.log(data.items[0]);
            this.files = new Array<any>();
            data.items.forEach(element => {
                let filename = element.name;
                const ref = this.storage.ref(ArchivosComponent.folder + filename);
                let url = ref.getDownloadURL();
                let item = {
                    name: filename,
                    link: url
                };
                this.files.push(item);
            });
            //console.log(this.files);
        });
    }

    publicarComercio() {
        this.router.navigate(['/pages/comercios']);
    }

    uploadFile(event) {
        const file = event.target.files[0];
        const filePath = ArchivosComponent.folder + file.name;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        //console.log("path: " + file.name);
    }

}