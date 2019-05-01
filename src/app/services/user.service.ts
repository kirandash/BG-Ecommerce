import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private database: AngularFireDatabase) { }

  save(user: firebase.User){
    this.database.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  fetch(uid: string): Observable<any> {
    return this.database.object('/users/' + uid).valueChanges();
  }
}
