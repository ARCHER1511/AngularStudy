import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../../Interfaces/IProduct';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feature-product',
  imports: [RouterLink],
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.scss'
})
export class FeatureProductComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  private productSubscription?: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productSubscription = this.productService.getAllProducts().subscribe({
      next: (products: IProduct[]) => {
        this.products = products;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}
