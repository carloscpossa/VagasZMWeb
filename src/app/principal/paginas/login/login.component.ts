import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidacoesCustomizadas } from '../../../Validacoes/ValidacoesCustomizadas';
import { AutenticacaoAPI } from '../../../servicos/API/autenticacao.api';
import { AlertaServico } from '../../../servicos/interfaceDeUsuario/alerta.servico';
import { Ui } from '../../../servicos/interfaceDeUsuario/interface.usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AutenticacaoAPI, Ui]
})
export class LoginComponent implements OnInit {

  public frmLogin: FormGroup;
  public erros: any[] = [];

  constructor(private fb: FormBuilder, private autenticacaoApi: AutenticacaoAPI, private alertaServico: AlertaServico, private ui:Ui, private router: Router) {

    this.frmLogin = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.required,
        ValidacoesCustomizadas.Email
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(50),
        Validators.required
      ])]
    });

  }

  ngOnInit() {
  }

  loginEmpresa() {
    this.alertaServico.clear();
    this.ui.lock('btnLoginEmpresa');

    this.autenticacaoApi
      .autenticarEmpresa(this.frmLogin.value)
      .subscribe(resultado => {  
        const resposta: any = resultado;      
        if (resposta.token) {
          localStorage.setItem('vagaszm.tokenempresa', resposta.token);
          localStorage.setItem('vagaszm.usuarioempresa', JSON.stringify(resposta.user));
          this.router.navigateByUrl('empresa');
        }
        else {
          this.erros = resposta.erros;
        }
        this.ui.unlock('btnLoginEmpresa')
      },
      erro => {
        this.erros = JSON.parse(erro._body).erros;
        for (let i = 0; i <= this.erros.length - 1; i++) {
          this.alertaServico.error(this.erros[i].message);
        }
        this.ui.unlock('btnLoginEmpresa')
      });
  }

  loginCandidato() {

  }

}
