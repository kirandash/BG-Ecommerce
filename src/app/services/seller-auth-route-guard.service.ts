import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'; // Double check, CanActivate should be imported from angular/router
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthRouteGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.userObservable
      .pipe(
        switchMap((user: firebase.User) => this.userService.fetch(user.uid)),
        map(user => user.isSeller)
      );
  }
}
