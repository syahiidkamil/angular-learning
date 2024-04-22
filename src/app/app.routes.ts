import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { TimeComponent } from './shared/components/time/time.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'App Login Page',
        component: LoginComponent
    },
    {
        path: 'home',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'time',
        title: 'Time Page',
        component: TimeComponent
    },
    {
        path: 'user',
        title: 'App User Page',
        component: UserComponent
    },
    {
        path: '**',
        title: 'Page Not Found',
        component: NotfoundComponent
    }
];
