import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http, HttpModule  } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { Facebook } from '@ionic-native/facebook';
import { facebookLogin } from '../pages/login/facebookLogin';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function createTranslateLoader(http: Http) {
  	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const firebaseConfig = {
  	apiKey: "AIzaSyDaxEDa72qvjC__niogWThdpS_I5pdl4kY",
    authDomain: "example-7bdae.firebaseapp.com",
    databaseURL: "https://example-7bdae.firebaseio.com",
    projectId: "example-7bdae",
    storageBucket: "example-7bdae.appspot.com",
    messagingSenderId: "919898445016"
};

@NgModule({
  declarations: [
    MyApp,
		SignupPage,
		LoginPage,
    HomePage
  ],
  imports: [
    BrowserModule,
		HttpModule,
    IonicModule.forRoot(MyApp),
		TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
		AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
		SignupPage,
		LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
		Facebook,
		facebookLogin,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
