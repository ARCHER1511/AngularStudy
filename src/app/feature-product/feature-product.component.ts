import { Component, inject} from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../../Interfaces/IProduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-product',
  imports: [RouterLink],
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.scss'
})
export class FeatureProductComponent {
    readonly _products = inject(ProductService);
    products : IProduct[] = this._products.products; // Display only the first two products
}
