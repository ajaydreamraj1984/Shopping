import { Routes } from '@angular/router';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [
   {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },      
      { path: 'home', component: HomeComponent },   
      { path: 'aboutus', component: AboutusComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'contactus', component: ContactusComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },      
      { path: 'welcome', component: WelcomeComponent }, 
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
];
