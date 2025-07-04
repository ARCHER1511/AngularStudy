import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-all-products',
  imports: [ProductComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {

}
