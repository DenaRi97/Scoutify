import { Routes } from '@angular/router';
import { PlayersComponent } from './pages/User/players/players.component';
import { ReportsComponent } from './pages/User/reports/reports.component';
import { AuthComponent } from './pages/Admin/auth/auth.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { HomeComponent } from './pages/User/home/home.component';
import { AuthRegComponent } from './pages/Admin/auth-reg/auth-reg.component';
import { DetailComponent } from './pages/User/detail/detail.component';
import { NewReportComponent } from './pages/User/new-report/new-report.component';
import { GraphComponent } from './pages/User/graph/graph.component';
import { blockPage } from './guards/loginBlock';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';



export const routes: Routes = [
    {
        path: '',
        component: HeroLandingComponent,
        
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate : [blockPage]
    },
    {
        path: 'login',
        component: AuthComponent //autentificacion del login
    },
    {
        path: 'register',
        component: AuthRegComponent //auth registro
    },
    {
        path: 'players',
        component: PlayersComponent,
        canActivate : [blockPage]
    },
    {
        path: 'reports',
        component: ReportsComponent,
        canActivate : [blockPage]
    },
    {
        path: 'player/:id',
        component: DetailComponent,
        canActivate : [blockPage]
    },
    {
        path: 'players/:id',
        component: NewReportComponent,
        canActivate : [blockPage]
    },
    {
        path: 'graph',
        component: GraphComponent,
        canActivate : [blockPage]
    },
    {
        path: 'dashboard',  //Admin paths
        component: DashboardComponent,
        // canActivate : [blockPage]
    },

];

