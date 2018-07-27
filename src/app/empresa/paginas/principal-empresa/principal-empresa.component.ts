import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-empresa',
  templateUrl: './principal-empresa.component.html'  
})
export class PrincipalEmpresaComponent implements OnInit {

  public vagasEmprego: any[] = [];

  constructor(){}

  ngOnInit(){

  }

  onPesquisouVagas(evento){    
    this.vagasEmprego = evento;
  }

}
