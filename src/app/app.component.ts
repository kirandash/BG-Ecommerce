import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-ecommerce';

  constructor(private auth: AuthService, router: Router, private userService: UserService){
    // Every tiem our app loads we check if it is a redirect from google. If it is and if user has signed in we try to get the returnUrl and redirect - redirection step 3
    auth.userObservable.subscribe(user => {
      if(user) {
        userService.save(user);
        let returnUrl = localStorage.getItem("returnUrl");
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
