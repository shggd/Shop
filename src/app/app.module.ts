import { TrackingModule } from './tracking/tracking.module';
import { NavbarService } from './services/navbar.service';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { RequestService } from './services/request.service';
import { CartService } from './services/cart.service';
import { ProductService } from './product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './navbar/footer.component';
import { BodyComponent } from './navbar/body.component';
import { NotfoundComponent } from './navbar/notfound.component';
import { FormsModule } from '@angular/forms';
// import { ReviewPageComponent } from './checkout/review-page.component';
// import { ReviewListComponent } from './checkout/review-list.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { ProductPreviewComponent } from './product/product-preview.component';
// import { ProductPageComponent } from './product-page/product-page.component';
// import { CartComponent } from './cart/cart.component';
// import { AddToCartComponent } from './cart/add-to-cart.component';
// import { RemoveItemComponent } from './cart/remove-item.component';
// import { CartListComponent } from './cart/cart-list.component';
// import { SearchComponent } from './search/search.component';
// import { SearchPageComponent } from './search/search-page.component';
// import { SearchResultComponent } from './search/search-result.component';
// import { ProductComponent } from './product/product.component';




const routes: Routes = [
    {path:'', pathMatch:'full', component:BodyComponent},
    {path:'404', component: NotfoundComponent},
    {path:'**', redirectTo:'404'},
    // {path:'product',pathMatch:'full',component:ProductComponent},
    // {path:'product/:id',pathMatch:'full',component:ProductPageComponent},
    // {path:'cart',component:CartComponent},
    // {path:'search', component:SearchPageComponent},
 ];



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    // NotfoundComponent,
    // NavbarComponent,
    // FooterComponent,
    // ReviewPageComponent,
    // ReviewListComponent,
    // ProductComponent,
    // ProductPreviewComponent,
    // ProductPageComponent,
    // CartComponent,
    // AddToCartComponent,
    // RemoveItemComponent,
    // CartListComponent,
    // SearchComponent,
    // SearchPageComponent,
    // SearchResultComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    ProductModule,
    CartModule,
    SearchModule,
    SharedModule,
    TrackingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService, CartService,RequestService,NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
