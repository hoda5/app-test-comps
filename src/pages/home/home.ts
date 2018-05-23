import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import {UserProvider} from 'ionic-ola-package';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';


interface Usuarios {
  cargo: string,
  nome: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // usuarios;
  // constructor(public navCtrl: NavController, private userProvider: UserProvider) {
  //   this.usuarios = this.userProvider.Usuarios();
  //   // this.usuarios = db.collection('usuarios').valueChanges();
  // }
  
  usuarioList: Observable<Usuarios[]>;
  usuario = this.db.list<Usuarios>('usuario')
  constructor(private db: AngularFireDatabase) {
    this.usuarioList = this.usuario.valueChanges()
    }



}
