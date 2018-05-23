import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';

import {AuthService} from '../services/auth.service'


import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

var usuarioLogado = localStorage.getItem('emailUsuarioLogado')
var _rootPage;
debugger
if(usuarioLogado) _rootPage = TabsPage;
else _rootPage = LoginPage

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = _rootPage;

  constructor(platform: Platform, private auth: AuthService, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
