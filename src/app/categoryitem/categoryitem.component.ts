import { Component,Input } from '@angular/core';
import { ICategory } from '../../Interfaces/ICategory';

@Component({
  selector: 'app-categoryitem',
  imports: [],
  templateUrl: './categoryitem.component.html',
  styleUrl: './categoryitem.component.scss'
})
export class CategoryitemComponent {
    @Input() category!: ICategory;
}
