import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';

import { AuthGuard } from './auth/auth-guard';
import { LoginGuard } from './auth/login-guard';

const routes: Routes = [
    {
        path: '',
        component: LeftSidebarComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard], data: { title: 'Tableau de Bord' } },
            { path: 'routeurs', loadChildren: () => import('./routeur/routeur.module').then(m => m.RouteurModule), canActivate: [AuthGuard], data: { title: 'Routeurs' } },
            { path: 'bases', loadChildren: () => import('./base/base.module').then(m => m.BaseModule), canActivate: [AuthGuard], data: { title: 'Bases' } },
            { path: 'annonceurs', loadChildren: () => import('./annonceur/annonceur.module').then(m => m.AnnonceurModule), canActivate: [AuthGuard], data: { title: 'Annonceurs' } },
            { path: 'campagnes', loadChildren: () => import('./campagne/campagne.module').then(m => m.CampagneModule), canActivate: [AuthGuard], data: { title: 'Campagnes' } },
            { path: 'plannings', loadChildren: () => import('./planning/planning.module').then(m => m.PlanningModule), canActivate: [AuthGuard], data: { title: 'Plannings' } },
            { path: 'resultats', loadChildren: () => import('./resultat/resultat.module').then(m => m.ResultatModule), canActivate: [AuthGuard], data: { title: 'Résultats' } },
            { path: 'statistiques-par-routeurs', loadChildren: () => import('./statistiques-par-routeurs/statistiques-par-routeurs.module').then(m => m.StatistiquesParRouteursModule), canActivate: [AuthGuard], data: { title: 'Statistiques par Routeurs' } },
            { path: 'statistiques-par-annonceurs', loadChildren: () => import('./statistiques-par-annonceurs/statistiques-par-annonceurs.module').then(m => m.StatistiquesParAnnonceursModule), canActivate: [AuthGuard], data: { title: 'Statistiques par Annonceurs' } },
            { path: 'statistiques-par-bases', loadChildren: () => import('./statistiques-par-bases/statistiques-par-bases.module').then(m => m.StatistiquesParBasesModule), canActivate: [AuthGuard], data: { title: 'Statistiques par Bases' } },
            { path: 'statistiques-par-campagnes', loadChildren: () => import('./statistiques-par-campagnes/statistiques-par-campagnes.module').then(m => m.StatistiquesParCampagnesModule), canActivate: [AuthGuard], data: { title: 'Statistiques par Campagnes' } },
            { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard], data: { title: 'Gestion des Utilisateurs' } },
        ]
    },
    {
        path: '',
        component: MinimalLayoutComponent,
        children: [
            { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard] },
            { path: '404', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
        ]
    },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
