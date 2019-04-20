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
Give Project name : ng-ecommerce
Click on "Add Firebase to your web app".
Copy the config properties from firebase project to our application's environment.ts and environment.prod.ts file.

## 4. Installing Dev Dependencies
npm i --save firebase angularfire2
check versions in package.json ("angularfire2": "^5.1.2", "firebase": "^5.10.0")

