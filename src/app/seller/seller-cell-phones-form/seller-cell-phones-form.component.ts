import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CellphoneService } from 'src/app/services/cellphone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-cell-phones-form',
  templateUrl: './seller-cell-phones-form.component.html',
  styleUrls: ['./seller-cell-phones-form.component.css']
})
export class SellerCellPhonesFormComponent implements OnInit {
  brandsObservable;
  constructor(brandService: BrandService, private cellphoneService: CellphoneService, private router: Router) { /* Note that brandService is not having keyword private because we are going to use it only in the constructor and not in any class */ 
    this.brandsObservable = brandService.getBrands(); // Observable can be now accessed in HTML using async pipe
  }

  ngOnInit() {
  }

  save(cellphone){
    // console.log(cellphone);
    this.cellphoneService.add(cellphone);
    this.router.navigate(['/seller/cell-phones']);
  }

}
