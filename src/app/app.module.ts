import { environment } from 'src/environments/environment'; // Make sure to use environment for dev and .prod for prod
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontComponent } from './common/front/front.component';
import { CellPhonesComponent } from './common/cell-phones/cell-phones.component';
import { CartComponent } from './common/cart/cart.component';
import { CheckoutComponent } from './common/checkout/checkout.component';
import { ThankYouComponent } from './common/thank-you/thank-you.component';
import { MyPurchasesComponent } from './user/my-purchases/my-purchases.component';
import { SellerCellPhonesComponent } from './seller/seller-cell-phones/seller-cell-phones.component';
import { DeliveryComponent } from './seller/delivery/delivery.component';
import { SigninComponent } from './common/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthRouteGuardService } from './services/auth-route-guard.service';
import { UserService } from './services/user.service';
import { SellerAuthRouteGuardService } from './services/seller-auth-route-guard.service';
import { SellerCellPhonesFormComponent } from './seller/seller-cell-phones-form/seller-cell-phones-form.component';
import { BrandService } from './services/brand.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontComponent,
    CellPhonesComponent,
    CartComponent,
    CheckoutComponent,
    ThankYouComponent,
    MyPurchasesComponent,
    SellerCellPhonesComponent,
    DeliveryComponent,
    SigninComponent,
    SellerCellPhonesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseconfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: FrontComponent },
      { path: 'cell-phones', component: CellPhonesComponent },
      { path: 'cart', component: CartComponent },
      { path: 'signin', component: SigninComponent },
      // Routes only for signed in users
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthRouteGuardService] },
      { path: 'thank-you', component: ThankYouComponent, canActivate: [AuthRouteGuardService] },
      { path: 'user/my-purchases', component: MyPurchasesComponent, canActivate: [AuthRouteGuardService] },
      { path: 'seller/cell-phones', component: SellerCellPhonesComponent, canActivate: [AuthRouteGuardService, SellerAuthRouteGuardService] },
      { path: 'seller/cell-phones/add', component: SellerCellPhonesFormComponent, canActivate: [AuthRouteGuardService, SellerAuthRouteGuardService] },
      { path: 'seller/delivery', component: DeliveryComponent, canActivate: [AuthRouteGuardService, SellerAuthRouteGuardService] }
    ])// RouterModule with route objects having path and component
  ],
  providers: [
    AuthService,
    AuthRouteGuardService,
    UserService,
    SellerAuthRouteGuardService,
    BrandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
