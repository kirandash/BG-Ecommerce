import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router'; // Double check, CanActivate should be imported from angular/router
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    // this.auth.userObservable.subscribe(user => {
    return this.auth.userObservable.pipe(map(user => {  
      if(user) return true;

      this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } }); // Passing url of page we navigated from as return url - redirection step 1
      return false;
    })); // Note we are using map in stead of subscribe because map automatically subscribes and unsubscribes. So we don't have to worry about unsubscribing manually
  }
}
