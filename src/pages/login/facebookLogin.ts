import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse  } from '@ionic-native/facebook';

@Injectable()
export class facebookLogin {
  private authState: FirebaseAuthState;
  fb;

  constructor(public auth$: AngularFireAuth, private platform: Platform, private facebook: Facebook) {
    this.fb = facebook;
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    if (this.platform.is('cordova')) {

			this.fb.login(['public_profile', 'user_friends', 'email'])
			  .then((res: FacebookLoginResponse) => {
					alert('Logged into Facebook!')
					const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
					return firebase.auth().signInWithCredential(facebookCredential);
				})
			  .catch(e => alert('Error logging into Facebook'));

    } else {
      return this.auth$.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      });
    }

  }

  signOut(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.facebook.displayName;
    } else {
      return '';
    }
  }

  displayEmail(){
      if (this.authState != null) {
      return this.authState.facebook.email;
    } else {
      return '';
    }
  }

  displayUid(){
     if (this.authState != null) {
      return this.authState.uid;
    } else {
      return '';
    }
  }
}
