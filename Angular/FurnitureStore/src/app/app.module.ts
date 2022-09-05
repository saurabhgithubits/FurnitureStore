import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { ProductListComponent } from './components/order/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { MyOrderComponent } from './components/order/my-order/my-order.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AddProductComponent,
    UpdateProductComponent,
    ViewProductComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UpdateUserComponent,
    UserDashboardComponent,
    HomeComponent,
    DashboardComponent,
    ProductDetailsComponent,
    UserSidebarComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent,
    MyOrderComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
