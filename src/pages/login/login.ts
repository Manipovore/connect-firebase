import { Component } from '@angular/core';
import { Platform, NavController, NavParams, ToastController  } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { facebookLogin } from './facebookLogin';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

   loginData = {
    email: '',
    password: ''
  }

  constructor(translate: TranslateService,
			public navCtrl: NavController,
      public platform: Platform,
      public navParams: NavParams,
      private af: AngularFire,
      private _auth: facebookLogin,
      private toastCtrl: ToastController
    ) {}

  facebookLogin(){
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    // let uid = this._auth.displayUid();
    // let name = this._auth.displayName();
    // let email = this._auth.displayEmail();
  }

  login() {
    // Login Code here
    this.af.auth.login({
      email: this.loginData.email,
      password: this.loginData.password
    }, {
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    })
    .then(auth => {
			// console.log(auth)
    })
    .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }

  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }

}
