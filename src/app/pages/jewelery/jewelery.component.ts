import { Component } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { JewelryComponent } from "../../components/jewelry/jewelry.component";
import { SliderComponent } from "../../components/slider/slider.component";

@Component({
  selector: 'app-jewelery',
  imports: [ProductComponent, JewelryComponent, SliderComponent],
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.scss'
})
export class JeweleryComponent {

}
