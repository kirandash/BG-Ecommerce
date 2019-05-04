import { Component, OnInit } from '@angular/core';
import { CellphoneService } from 'src/app/services/cellphone.service';

@Component({
  selector: 'app-seller-cell-phones',
  templateUrl: './seller-cell-phones.component.html',
  styleUrls: ['./seller-cell-phones.component.css']
})
export class SellerCellPhonesComponent implements OnInit {
  cellphonesObservable;
  constructor(private cellphoneService: CellphoneService) {
    this.cellphonesObservable = this.cellphoneService.fetchAllPhones();
  }

  ngOnInit() {
  }

}
