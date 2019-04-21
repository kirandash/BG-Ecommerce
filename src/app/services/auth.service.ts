import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userObservable: Observable<firebase.User>;

  constructor(private angfireAuth: AngularFireAuth, private route: ActivatedRoute) { 
    this.userObservable = angfireAuth.authState;
  }

  signin() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'; // Get the returning url from queryparams or set it as root - redirection step 2
    localStorage.setItem('returnUrl', returnUrl); // Storing the returnUrl in localstorage since we will redirect to google for authentication
    this.angfireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) // Using the redirect feature to redirect to google oAuth provider
  }

  signout() {
    this.angfireAuth.auth.signOut();
  }
}
