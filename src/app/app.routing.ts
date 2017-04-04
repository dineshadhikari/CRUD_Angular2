import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard.component';



const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path:'login',component: LoginComponent },
    { path: 'dashboard', component: dashboardComponent },

    // otherwise redirect to home
    { path: '', redirectTo: 'login',pathMatch:'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
