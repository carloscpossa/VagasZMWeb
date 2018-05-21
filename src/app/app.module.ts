import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';

import { AppComponent } from './app.component';

// Rotas
import { Routing, RoutingProviders } from './app.rotas';

//Componentes Principais
import { MenuPrincipalComponent } from './principal/componentes/menu-principal/menu-principal.component';
import { NumeroVagasComponent } from './principal/componentes/numero-vagas/numero-vagas.component';
import { CarrosselPrincipalComponent } from './principal/componentes/carrossel-principal/carrossel-principal.component';
import { BannerEmpresaComponent } from './principal/componentes/banner-empresa/banner-empresa.component';


//Componentes Empresa
import { MenuEmpresaComponent } from './empresa/componentes/menu-empresa/menu-empresa.component';

//Páginas
import { HomeComponent } from './principal/paginas/home/home.component';
import { LoginComponent } from './principal/paginas/login/login.component';
import { QuemSomosComponent } from './principal/paginas/quem-somos/quem-somos.component';
import { EmpresaComponent } from './principal/paginas/empresa/empresa.component';


//Servicos
import { AlertaServico } from './servicos/interfaceDeUsuario/alerta.servico';
import { AutorizacaoEmpresaService } from './servicos/Autorizacao/autorizacao-empresa.service';




@NgModule({
  declarations: [
    AppComponent,    
    MenuPrincipalComponent,      
    NumeroVagasComponent, 
    CarrosselPrincipalComponent, 
    HomeComponent, 
    BannerEmpresaComponent, 
    LoginComponent, 
    QuemSomosComponent, 
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    CompartilhadoModule
  ],
  exports:[
    
  ],
  providers: [AlertaServico, AutorizacaoEmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
