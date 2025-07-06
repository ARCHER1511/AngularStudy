import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../../Interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

    _product?:IProduct
    constructor(private product: ProductService,   private route: ActivatedRoute){ }

    ngOnInit(): void 
    {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.product.getById(id).subscribe({
        next: (product: IProduct) => {
          this._product = product;
        },
        error: (err) => {
          console.error('Error fetching product details:', err);
        }
      });
      
    }
}
