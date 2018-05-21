import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AutorizacaoEmpresaService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {    
    if (!localStorage.getItem('vagaszm.tokenempresa')){
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
  
}
