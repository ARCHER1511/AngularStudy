import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../../Interfaces/IProduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  private productSubscription?: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productSubscription = this.productService.getAllProducts().subscribe({
      next: data => this.products = data,
      error: err => console.error('Failed to fetch products', err)
    });
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}

