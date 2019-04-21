import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // user: firebase.User;
  userObservable: Observable<firebase.User>;
  constructor(private angfireAuth: AngularFireAuth) {
    /*angfireAuth.authState.subscribe(resp => {
      console.log(resp);// For debugging purpose to check the auth state for sign in and sign out (null = signout, object = signed in)
      this.user = resp;
    });*/
    this.userObservable = angfireAuth.authState;
    /*this.userObservable.subscribe(resp => {
      console.log(resp); // Only for debugging purpose
    });*/
  }

  ngOnInit() {
  }

  signout() {
    this.angfireAuth.auth.signOut();
  }

}
