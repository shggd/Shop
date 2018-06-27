import { SharedModule } from './../shared/shared.module';
import { AddToCartComponent } from './../cart/add-to-cart.component';
import { ProductPreviewComponent } from './product-preview.component';
import { ProductComponent } from './product.component';
import { ProductPageComponent } from './../product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';



const productRouting: Routes = [
    {path:'product',component:ProductComponent},
    {path:'product/:id',pathMatch:'full',component:ProductPageComponent},
];

@NgModule({
    declarations:[
        ProductComponent,
        ProductPageComponent,
        ProductPreviewComponent,
        AddToCartComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(productRouting)
    ],
    providers:[]
})


export class ProductModule{}