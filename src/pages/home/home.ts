import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {UserProvider} from 'ionic-ola-package'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarios;
  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    this.usuarios = this.userProvider.Usuarios();
  }



}
