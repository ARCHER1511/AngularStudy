import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../Interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  standalone: true,
  selector: 'app-jewelry',
  imports: [CommonModule, RouterLink],
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss']
})
export class JewelryComponent implements OnInit, OnDestroy {
  jewelryProducts: IProduct[] = [];
  private productSubscription?: Subscription;

  constructor(private productService: ProductService) {}

 ngOnInit(): void {
  this.productSubscription = this.productService.getAllProducts()
    .pipe(
      map(data => data.filter(p => p.category === 'jewelery'))
    )
    .subscribe({
      next: filtered => this.jewelryProducts = filtered,
      error: err => console.error('Failed to fetch jewelry products', err)
    });
}



  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}

