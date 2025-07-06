import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../../Interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent{

    _product?:IProduct
    constructor(private product: ProductService, private route: ActivatedRoute)
    {
        const Id = this.route.snapshot.paramMap.get('id');
        this._product = this.product.getById(Number(Id));
    }
}
