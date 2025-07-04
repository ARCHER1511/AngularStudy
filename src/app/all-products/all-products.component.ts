import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SliderComponent } from '../slider/slider.component';


@Component({
  selector: 'app-all-products',
  imports: [ProductComponent,SliderComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {

}
