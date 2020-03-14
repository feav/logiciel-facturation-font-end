import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { 
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'routeur',
        loadChildren: () => import('./routeur/routeur.module').then(m => m.RouteurModule)
    },
    {
        path: 'base',
        loadChildren: () => import('./base/base.module').then(m => m.BaseModule)
    },
    {
        path: 'annonceur',
        loadChildren: () => import('./annonceur/annonceur.module').then(m => m.AnnonceurModule)
    },
    {
        path: 'campagne',
        loadChildren: () => import('./campagne/campagne.module').then(m => m.CampagneModule)
    },
    {
        path: 'resultat',
        loadChildren: () => import('./resultat/resultat.module').then(m => m.ResultatModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
