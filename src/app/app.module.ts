import { environment } from 'src/environments/environment'; // Make sure to use environment for dev and .prod for prod
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
