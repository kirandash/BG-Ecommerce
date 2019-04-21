import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'; // Double check, CanActivate should be imported from angular/router
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    // this.auth.userObservable.subscribe(user => {
    return this.auth.userObservable.pipe(map(user => {  
      if(user) return true;

      this.router.navigate(['/signin']);
      return false;
    })); // Note we are using map in stead of subscribe because map automatically subscribes and unsubscribes. So we don't have to worry about unsubscribing manually
  }
}
