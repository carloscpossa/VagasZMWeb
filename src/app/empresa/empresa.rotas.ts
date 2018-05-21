import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalEmpresaComponent } from './paginas/principal-empresa/principal-empresa.component';
import { PublicarVagaComponent } from './paginas/publicar-vaga/publicar-vaga.component';

import { AutorizacaoEmpresaService } from '../servicos/Autorizacao/autorizacao-empresa.service';




const empresaRoutes: Routes = [
    {path:'', component: PrincipalEmpresaComponent},
    {path:'publicarvaga', component: PublicarVagaComponent}
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forChild(empresaRoutes);