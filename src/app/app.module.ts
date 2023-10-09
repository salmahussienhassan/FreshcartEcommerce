import { LoadingInterceptor } from './loading.interceptor';
import { HeaderInterceptorInterceptor } from './header-interceptor.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{BrowserAnimationsModule} from'@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { BranddetailesComponent } from './branddetailes/branddetailes.component';
import { CategorydetailesComponent } from './categorydetailes/categorydetailes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllorderComponent } from './allorder/allorder.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoryComponent,
    BrandsComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    ProductdetailesComponent,
   
    SearchPipe,
        BranddetailesComponent,
        CategorydetailesComponent,
        CheckoutComponent,
        AllorderComponent,
        WishlistComponent,
       
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ToastrModule.forRoot( { positionClass: 'toast-bottom-right'})
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
