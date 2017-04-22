import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { dashboardComponent } from './dashboard.component';
import {TutorialComponent} from './tutorial/tutorial.component';




const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path:'login',component: LoginComponent },
    { path: 'dashboard', component: dashboardComponent },
    { path: 'tutorial', component: TutorialComponent },
    


    // otherwise redirect to home
    { path: '', redirectTo: 'dashboard',pathMatch:'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
