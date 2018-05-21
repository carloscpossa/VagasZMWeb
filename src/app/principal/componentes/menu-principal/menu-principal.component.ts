import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html'
})
export class MenuPrincipalComponent implements OnInit {

  public empresaLogada: boolean = false;

  constructor() { }

  ngOnInit() {

    if (localStorage.getItem('vagaszm.usuarioempresa')) {
      this.empresaLogada = true;
    }

  }

}
