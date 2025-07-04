import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { FeatureProductComponent } from "../feature-product/feature-product.component";




@Component({
  selector: 'app-home',
  imports: [CategoryComponent, FeatureProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
