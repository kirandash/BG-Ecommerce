import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
// import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // user: firebase.User;
  // userObservable: Observable<firebase.User>;
  isSeller: false;
  constructor(private auth: AuthService, private userService: UserService) {
    /*angfireAuth.authState.subscribe(resp => {
      console.log(resp);// For debugging purpose to check the auth state for sign in and sign out (null = signout, object = signed in)
      this.user = resp;
    });*/
    // this.userObservable = angfireAuth.authState;

    /*this.userObservable.subscribe(resp => {
      console.log(resp); // Only for debugging purpose
    });*/
    auth.userObservable.pipe(switchMap((user: firebase.User) => this.userService.fetch(user.uid))).subscribe(x => {this.isSeller = x.isSeller; /*console.log(this.isSeller)*/}); // No need of unsubscribing here since there is only one instance also keeping subscribing is good since if anything changes in database it will automatically reflect. Try changing isSeller property in db, it will immediately reflect on navbar
  }

  ngOnInit() {
  }

  signout() {
    // this.angfireAuth.auth.signOut();
    this.auth.signout();
  }

}
