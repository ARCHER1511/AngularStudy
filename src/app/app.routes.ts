import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),title: 'Home'},
    {path:'products', loadComponent: ()=> import('./pages/all-products/all-products.component').then(m => m.AllProductsComponent), title: 'Products'},
    {path: 'products/:id', loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent), title: 'Product Details'},
    {path: 'categories', loadComponent: () => import('./pages/category/category.component').then(m => m.CategoryComponent), title: 'Categories'},
    {path: 'jewelery', loadComponent: () => import('./pages/jewelery/jewelery.component').then(m => m.JeweleryComponent), title: 'Jewelery'},
    {path: '**', redirectTo: 'not_found', pathMatch: 'full'},
    {path: 'not_found', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Not Found'}
];
