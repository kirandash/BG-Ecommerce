import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private angfireAuth: AngularFireAuth) {
    angfireAuth.authState.subscribe(resp => console.log(resp)); // For debugging purpose to check the auth state for sign in and sign out (null = signout, object = signed in)
  }

  ngOnInit() {
  }

  signout() {
    this.angfireAuth.auth.signOut();
  }

}
