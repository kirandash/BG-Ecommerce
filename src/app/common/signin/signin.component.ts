import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signin() {
    // this.angfireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) // Using the redirect feature to redirect to google oAuth provider
    this.auth.signin();
  }

}
