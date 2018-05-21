import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './principal/paginas/home/home.component';
import { LoginComponent } from './principal/paginas/login/login.component';
import { QuemSomosComponent } from './principal/paginas/quem-somos/quem-somos.component';
import { EmpresaComponent } from './principal/paginas/empresa/empresa.component';

import { AutorizacaoEmpresaService } from './servicos/Autorizacao/autorizacao-empresa.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'quemsomos', component: QuemSomosComponent },
    { path: 'empresas', component: EmpresaComponent },
    { path: 'empresa', canActivate: [AutorizacaoEmpresaService], loadChildren:'app/empresa/empresa.module#EmpresaModule'}
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);