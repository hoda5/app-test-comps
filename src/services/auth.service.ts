import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import AuthProvider = firebase.auth.AuthProvider;
import { HomePage } from '../pages/home/home';

@Injectable()
export class AuthService {
 	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth, private navCtrl: NavController) {
		afAuth.authState.subscribe(user => {
			this.user = user;
			if(this.user) this.navCtrl.setRoot(HomePage)
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

    signInWithGoogle() {
		debugger
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}
	
	oauthCheckLogin(callback){
		return firebase.auth().onAuthStateChanged(user => {
			return callback(user.email)
		}) 	
	}

private oauthSignIn(provider: AuthProvider) {
	if (!(<any>window).cordova) {
		return this.afAuth.auth.signInWithPopup(provider);
	} else {
		return this.afAuth.auth.signInWithRedirect(provider)
		.then(() => {
			return this.afAuth.auth.getRedirectResult().then( result => {
				// This gives you a Google Access Token.
				// You can use it to access the Google API.
				let token = result.credential.accessToken;
				// The signed-in user info.
				let user = result.user;
				console.log(token, user);
			}).catch(function(error) {
				// Handle Errors here.
				alert(error.message);
			});
		});
	}
}

}
