import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),title: 'Home'},
    {path:'products', loadComponent: ()=> import('../app/all-products/all-products.component').then(m => m.AllProductsComponent), title: 'Products'},
    {path: 'products/:id', loadComponent: () => import('../app/details/details.component').then(m => m.DetailsComponent), title: 'Product Details'},
    {path: 'categories', loadComponent: () => import('./category/category.component').then(m => m.CategoryComponent), title: 'Categories'},
    {path: '**', redirectTo: 'not_found', pathMatch: 'full'},
    {path: 'not_found', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Not Found'}
];
