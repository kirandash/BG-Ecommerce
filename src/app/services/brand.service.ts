import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private database: AngularFireDatabase) { }

  getBrands(){
    console.log(this.database.list('/brands'));
    return this.database.list('/brands').valueChanges();
  }
}
