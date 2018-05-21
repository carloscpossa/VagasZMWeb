import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-empresa',
  templateUrl: './menu-empresa.component.html'  
})
export class MenuEmpresaComponent implements OnInit {

  public nomeUsuario: string = "";
  public nomeEmpresa: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('vagaszm.usuarioempresa')){
      this.nomeUsuario=JSON.parse(localStorage.getItem('vagaszm.usuarioempresa')).nome;
      this.nomeEmpresa=JSON.parse(localStorage.getItem('vagaszm.usuarioempresa')).nomeEmpresa;
    }
  }

  sairEmpresa(){    
    localStorage.removeItem('vagaszm.tokenempresa');   
    localStorage.removeItem('vagaszm.usuarioempresa');
    this.router.navigateByUrl('/');
  }

}
