import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

import { MenuEmpresaComponent } from './componentes/menu-empresa/menu-empresa.component';
import { PrincipalEmpresaComponent } from './paginas/principal-empresa/principal-empresa.component';
import { PublicarVagaComponent } from './paginas/publicar-vaga/publicar-vaga.component';


// Rotas
import { Routing, RoutingProviders } from './empresa.rotas';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  imports: [
    CommonModule,
    Routing,
    CompartilhadoModule,    
    HttpModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  declarations: [
    MenuEmpresaComponent, 
    PrincipalEmpresaComponent, PublicarVagaComponent
  ]
})
export class EmpresaModule { }
