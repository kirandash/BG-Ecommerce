import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userObservable: Observable<firebase.User>;

  constructor(private angfireAuth: AngularFireAuth) { 
    this.userObservable = angfireAuth.authState;
  }

  signin() {
    this.angfireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) // Using the redirect feature to redirect to google oAuth provider
  }

  signout() {
    this.angfireAuth.auth.signOut();
  }
}
