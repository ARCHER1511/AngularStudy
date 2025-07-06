import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  readonly products = inject(ProductService);
}
