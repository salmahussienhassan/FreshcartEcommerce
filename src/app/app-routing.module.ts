import { WishlistComponent } from './wishlist/wishlist.component';
import { AllorderComponent } from './allorder/allorder.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategorydetailesComponent } from './categorydetailes/categorydetailes.component';
import { BranddetailesComponent } from './branddetailes/branddetailes.component';
import { routeGuard } from './route.guard';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[routeGuard]},
  {path:'cart',component:CartComponent,canActivate:[routeGuard]},
  {path:'products',component:ProductsComponent,canActivate:[routeGuard]},
  {path:'categories',component:CategoryComponent,canActivate:[routeGuard]},
  {path:'allorders',component:AllorderComponent,canActivate:[routeGuard]},
  {path:'wishlist',component:WishlistComponent,canActivate:[routeGuard]},
  {path:'brands',component:BrandsComponent,canActivate:[routeGuard]},
  {path:'checkout/:cartId',component:CheckoutComponent,canActivate:[routeGuard]},
  {path:'setting',
  loadChildren:()=>{return import('./settings/settings.module').then(  (m)=>{return m.SettingsModule}    )}
},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'productdetailes/:id/:productName',component:ProductdetailesComponent,canActivate:[routeGuard]},
  {path:'branddetailes/:id/:brandName',component:BranddetailesComponent,canActivate:[routeGuard]},
  {path:'categorydetailes/:id/:catName',component:CategorydetailesComponent,canActivate:[routeGuard]},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
