import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';

import { AngularFire } from 'angularfire2';
import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
	connect;

  constructor(
			translate: TranslateService,
			platform: Platform,
			private af: AngularFire,
			statusBar: StatusBar,
			splashScreen: SplashScreen
	 ) {

		var userLang = navigator.language.split('-')[0];
  	userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
		translate.setDefaultLang('en');
		translate.use(userLang);

		this.af.auth.subscribe(auth => {
      if(!auth){
					this.rootPage = LoginPage;
			} else {
					this.rootPage = HomePage;
			}

			platform.ready().then(() => {
	      statusBar.styleDefault();
				splashScreen.hide();
    	});
    });
  }

}
