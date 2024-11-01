import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'adminlayout',component:AdminlayoutComponent}
];
