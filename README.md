# NgEcommerce

## 1. Requirements:
Install node. Check: node --version
Install npm. (comes as a package with node) npm --version
Install angular cli: npm install -g @angular/cli Check: ng --version

## 2. Creating project, Running it on server
ng new ng-ecommerce
code .
ng serve

## 3. Setting up Firebase
Create a firebase account. It's free and go to https://console.firebase.google.com
Click on "Add Project"
Give Project name : BG-Ecommerce
Click on "Add Firebase to your web app".
Copy the config properties from firebase project to our application's environment.ts and environment.prod.ts file.

## 4. Installing Dev Dependencies
npm i --save firebase angularfire2
check versions in package.json ("angularfire2": "^5.1.2", "firebase": "^5.10.0")

## 5. Installing bootstrap
npm i --save bootstrap
Imort in styles.css

## 6. Creating navbar from bootstrap starter template
https://getbootstrap.com/docs/4.3/examples/starter-template/

## 7. Creating navbar component
ng g c navbar --dry-run
ng g c navbar

## 8. Create components for pages
common: front page, cell phones page, cart page, checkout page, thank you page
ng g c common/front, ng g c common/cell-phones, ng g c common/cart, ng g c common/checkout, ng g c common/thank-you
user: My purchases page, 
ng g c user/my-purchases
seller: cell phones page, delivery page
ng g c seller/seller-cell-phones, ng g c seller/delivery

## 9. Setting up routes
RouterModule.forRoot([{ path: '', component: FrontComponent }])
routerLink, router-outlet

## 10. Installing ng-bootstrap for js components of bootstrap & creating a dropdown functionality
npm i --save @ng-bootstrap/ng-bootstrap
We included just bootstrap css so far. But for the js components we need to install another package called ng-bootstrap.
This has directives for generating bootstrap components like dropdown items etc that can be used with angular.

## 11. Creating user and seller dropdowns

## 12. Adding cursor pointer to dropdown link

## 13. Firebase Deployment
npm i -g firebase-tools
check: firebase --version
Open command line of windows. Go to D:/projects/ng-ecommerce/
firebase signin from Windows command line. (Git bash does not work) It will open a prompt in browser. signin with your gmail account.
firebase init
select hosting from the options and hit enter.
Enter dist/ng-ecommerce as the directory for deployment instead of public
enter No for rewriting index.html options
Make sure it is reflected in firebase.json file.

Build project. With npm build --prod
Deploy to firebase: firebase deploy
Check the deployed app at https://ng-ecommerce-42b67.firebaseapp.com/

## 14. Set up Google Authentication & create signin component
https://console.firebase.google.com
For project ng-ecommerce
Select Authentication
Enable Google Authentication

Create signin component
ng g c common/signin

## 15. Creating signin authentication
After signin in user details with email and user id get saved in firebase under users information

## 16. Signout
AngularFireAuth
.auth.signOut()

## 17. Changing signin text and adding cursor pointer to signout link

## 18. Conditions to show signin and signout links & showing username
user.displayName

## 19. Asynchronously subscribing and unsubscribing to firebase observable
Any observable we are subscribing to should be unsubscribed. 
Solutions: 1. Call unsubscribe method on onDestroy lifecycle of component or
2. Instead of subscribing to the observable, declare it in component and then use it's value with async pipe in component.html. (Best solution)

## 20. ngIf else and ng-template for sign in and out

## 21. Create auth service - Loose coupling by separating service from component
So far we added the sign in and sign out service in component. But it makes things difficult while testing. So better to avoid tight coupling and move service to a new file thus, while testing we can fake these auth services instead of providing actual data
ng g s services/auth
Add the service in providers for app.module

## 22. Moving sign in sign out and user details to service from component

## 23. Creating AuthRouteGuardService to protect checkout route