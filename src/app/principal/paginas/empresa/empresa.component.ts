import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidacoesCustomizadas } from '../../../Validacoes/ValidacoesCustomizadas';
import { CidadeAPI } from '../../../servicos/API/cidade.api';
import { EmpresaAPI } from '../../../servicos/API/empresa.api';
import { environment } from '../../../../environments/environment.prod';
import { Ui } from '../../../servicos/interfaceDeUsuario/interface.usuario';
import { AlertaServico } from '../../../servicos/interfaceDeUsuario/alerta.servico';



@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  providers: [Ui, CidadeAPI, EmpresaAPI]
})
export class EmpresaComponent implements OnInit {

  public frmEmpresa: FormGroup;
  public erros: any[] = [];
  public cidades: any[] = [];

  constructor(private fb: FormBuilder, private cidadeApi: CidadeAPI, private ui: Ui, private empresaAPI: EmpresaAPI, private alertaServico: AlertaServico) {

    this.frmEmpresa = this.fb.group({
      nomeUsuario: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        ValidacoesCustomizadas.Email
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])],
      confirmacaoSenha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])],
      nomeEmpresa: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60)
      ])],
      cidade: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60)
      ])],
      site: ['', Validators.compose([
        Validators.maxLength(50)
      ])],
      descricao: ['', Validators.compose([])]
    });
  }

  ngOnInit() {
    if (!sessionStorage.getItem('vagaszm.cidades')) {
      this.cidadeApi.buscarPorCidadesPorUf(environment.ufPadrao)
        .subscribe(resultado => {
          const resposta: any = resultado;
          if (resposta.sucesso) {
            sessionStorage.setItem('vagaszm.cidades', JSON.stringify(resposta.dados));
            this.cidades = resposta.dados;
          }
        });
    }
    else {
      this.cidades = JSON.parse(sessionStorage.getItem('vagaszm.cidades'));
    }
  }

  cadastrarEmpresa() {
    this.alertaServico.clear();
    this.ui.lock('btnCadastraEmpresa');
    this.empresaAPI.cadastrarEmpresa(this.frmEmpresa.value)
      .subscribe(resultado => {
        const resposta: any = resultado;
        if (resposta.sucesso) {
          this.alertaServico.success('Empresa cadastrada com sucesso! Realize seu login para publicar suas vagas.')
        }
        this.ui.unlock('btnCadastraEmpresa');
      },
        erro => {
          this.erros = JSON.parse(erro._body).erros;
          for (let i = 0; i <= this.erros.length - 1; i++) {
            this.alertaServico.error(this.erros[i].message);
          }
          this.ui.unlock('btnCadastraEmpresa');
        });
  }
}
