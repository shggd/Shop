import { ComfirmationComponent } from './../checkout/comfirmation.component';
import { CheckoutGuard } from './../guards/checkout.guard';
import { ReviewPageComponent } from './../checkout/review-page.component';
import { CheckoutComponent } from './../checkout/checkout.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RemoveItemComponent } from './remove-item.component';
import { CartListComponent } from './cart-list.component';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const cartRouting: Routes = [
    {path:'cart',component:CartComponent},
    {path:'checkout',component:CheckoutComponent,canActivate:[CheckoutGuard]},
    {path:'review-order',component:ReviewPageComponent,canActivate:[CheckoutGuard]},
    {path:'comfirmation/:id', pathMatch:'full',component:ComfirmationComponent}
];


@NgModule({
    declarations:[
        CartComponent,
        CartListComponent,
        RemoveItemComponent,
        CheckoutComponent,
        ReviewPageComponent,
        ComfirmationComponent,
        
        
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(cartRouting)
    ],
    providers:[CheckoutGuard]
})

export class CartModule {}