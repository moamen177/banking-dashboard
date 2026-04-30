import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Customers } from './customers/customers';
import { Settings } from './settings/settings';   
export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path:'dashboard',component: Dashboard},
    {path:'customers',component:Customers },
    {path:'Settings',component:Settings },
];
