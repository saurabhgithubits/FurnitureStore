import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { MyOrderComponent } from './components/order/my-order/my-order.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/welcome',
    pathMatch:'full'
  },
  { 
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  { 
    path:'welcome',
    component:WelcomeComponent,
    pathMatch:'full'
  },
  { 
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    // canActivate: [AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'addProduct',
        component:AddProductComponent
      },
      {
        path:'updateProfile/:userId',
        component:UpdateUserComponent
      },
      {
        path:'updateProduct/:productId',
        component:UpdateProductComponent
      },
      {
        path:'products',
        component:ViewProductComponent,
      },
      {
        path:'products/products/:productId',
        component:ProductDetailsComponent
      },
      
      
     ]
   },
   {
     path:'user',
     component:UserDashboardComponent,
    //  canActivate: [NormalGuard],
     children:[
      {
        path:'profile',
        component:UserProfileComponent
       },
       {
         path:'updateProfile/:userId',
         component:UpdateUserComponent,
        },
        {
          path:'products',
          component:ProductListComponent,
         },
         {
          path:'cart',
          component:CartComponent,
         },
         {
          path:'checkout',
          component:CheckoutComponent,
         },
         {
          path:'orders',
          component:MyOrderComponent,
         },
     ]
    },
   
  // {path:'**',component:PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
