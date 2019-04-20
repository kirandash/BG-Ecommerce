import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private angfireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.angfireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) // Using the redirect feature to redirect to google oAuth provider
  }

}
