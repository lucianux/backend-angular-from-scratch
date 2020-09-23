import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument }
        from '@angular/fire/firestore';
import { map, take, first } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Comercio } from '../model/comercio';

@Injectable()
export class ComercioService {
    private comercios_string: string[];
    comercios: Observable<Comercio[]>;
    private coleccionDeComercios: AngularFirestoreCollection<Comercio>;

    constructor(private afs: AngularFirestore) {
        this.comercios_string = ['Com1', 'Com2', 'Com3'];

        this.coleccionDeComercios = afs.collection<Comercio>('comercios');
        //this.comercios = this.coleccionDeComercios.valueChanges();
        this.comercios = this.coleccionDeComercios.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Comercio;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    // public obtenerComercios(): Observable<Comercio[]> {
    //     return this.comercios;
    // }

    public publicarComercio(comercio: Comercio) {
        this.coleccionDeComercios.add(comercio);
    }

    public actualizarComercio(comercio: Comercio) {
        var comercioActualizable: AngularFirestoreDocument;
        comercioActualizable = this.afs.doc<Comercio>(`comercios/${comercio.id}`);
        comercioActualizable.update(comercio);
    }

    public obtenerComercios(): Observable<Comercio[]> {
        return this.comercios;
    }

    public obtenerComercio(uid: string): Observable<firebase.firestore.DocumentData> {
        var comercioDoc: AngularFirestoreDocument;
        comercioDoc = this.afs.doc<Comercio>(`comercios/${uid}`);
        return comercioDoc.valueChanges();
    }

    public agregarComercio(comercio: string) {
        this.comercios_string.push(comercio);
    }

    public eliminarComercio(comercio: Comercio) {
        var borrarComercio: AngularFirestoreDocument;
        borrarComercio = this.afs.doc<Comercio>(`comercios/${comercio.id}`);
        borrarComercio.delete();
    }
}