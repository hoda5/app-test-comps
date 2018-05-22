import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';

import {AuthService} from '../services/auth.service'


import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  templateUrl: 'app.html'
})
export class MyApp { 
  
  rootPage: any = LoginPage;

  constructor(platform: Platform, private auth: AuthService, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
