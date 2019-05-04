import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  constructor(private database: AngularFireDatabase) { }

  add(cellphone){
    return this.database.list('/cellphones').push(cellphone); // returns a promise
  }
}
