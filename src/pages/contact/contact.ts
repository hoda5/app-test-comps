import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsuariosComponent} from 'ionic-usuario-hoda5'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  usuarios: Array<{}>
  constructor(public navCtrl: NavController) {
    usuarios: UsuariosComponent
  }

}
