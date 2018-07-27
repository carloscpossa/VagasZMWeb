import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreaProfissionalAPI } from '../../../servicos/API/areaProfissional.api';
import { TipoContratacaoAPI } from '../../../servicos/API/tipoContratacao.api';
import { VagaEmpregoAPI } from '../../../servicos/API/vagaEmprego.api';
import { AlertaServico } from '../../../servicos/interfaceDeUsuario/alerta.servico';
import { Ui } from '../../../servicos/interfaceDeUsuario/interface.usuario';



@Component({
  selector: 'app-pesquisa-vagas',
  templateUrl: './pesquisa-vagas.component.html',
  providers: [AreaProfissionalAPI, TipoContratacaoAPI, VagaEmpregoAPI, Ui]
})
export class PesquisaVagasComponent implements OnInit {

  public vagasEmprego: any[] = [];
  public erros: any[] = [];

  @Output() pesquisouVagas = new EventEmitter();

  public areasProfissionais: any[] = [];
  public tiposContratacao: any[] = [];

  public frmPesquisaVaga: FormGroup;

  constructor(private fb: FormBuilder,
    private areaProfissionalAPI: AreaProfissionalAPI,
    private tipoContratacaoAPI: TipoContratacaoAPI,
    private vagaEmpregoAPI: VagaEmpregoAPI,
    private alertaServico: AlertaServico,
    private ui: Ui) {

    this.frmPesquisaVaga = this.fb.group({
      cargo: ['', Validators.compose([])],
      descricao: ['', Validators.compose([])],
      areaProfissionalId: ['', Validators.compose([])],
      tipoContratacaoId: ['', Validators.compose([])],
      salarioInicial: ['', Validators.compose([])],
      salarioFinal: ['', Validators.compose([])],
      status: ['', Validators.compose([])]
    });

    this.frmPesquisaVaga.get('status').setValue(0);
    this.frmPesquisaVaga.get('salarioInicial').setValue(0);
    this.frmPesquisaVaga.get('salarioFinal').setValue(0);
  }

  ngOnInit() {
    this.ui.setVisible('divLoad')
    this.buscaAreaProfissional();
    this.buscaTipoContratacao();
    

    this.vagaEmpregoAPI
      .BuscarVagasEmpresa(null, null, null, null, null, null, 1)
      .subscribe(resultado => {
        const dadosVagas: any = resultado;
        if (dadosVagas.sucesso) {
          this.vagasEmprego = dadosVagas.dados;
          this.pesquisouVagas.emit(this.vagasEmprego);
        }
        this.ui.setHidden('divLoad');
      },
      erro => {
        this.erros = JSON.parse(erro._body).erros;
        for (let i = 0; i <= this.erros.length - 1; i++) {
          this.alertaServico.error(this.erros[i].message);
        }
        this.ui.setHidden('divLoad');
      });

  }

  pesquisarVagas() {

    this.vagasEmprego = [];    

    this.ui.lock('btnPesqVaga');
    this.ui.setVisible('divLoad');

    this.vagaEmpregoAPI
      .BuscarVagasEmpresa(this.frmPesquisaVaga.get('cargo').value,
      this.frmPesquisaVaga.get('descricao').value,
      this.frmPesquisaVaga.get('areaProfissionalId').value,
      this.frmPesquisaVaga.get('tipoContratacaoId').value,
      this.frmPesquisaVaga.get('salarioInicial').value,
      this.frmPesquisaVaga.get('salarioFinal').value,
      this.frmPesquisaVaga.get('status').value)
      .subscribe(resultado => {
        const dadosVagas: any = resultado;
        if (dadosVagas.sucesso) {
          this.vagasEmprego = dadosVagas.dados;
          this.pesquisouVagas.emit(this.vagasEmprego);
        }
        this.ui.unlock('btnPesqVaga');
        this.ui.setHidden('divLoad');
      },
      erro => {
        this.erros = JSON.parse(erro._body).erros;
        for (let i = 0; i <= this.erros.length - 1; i++) {
          this.alertaServico.error(this.erros[i].message);
        }
        this.ui.unlock('btnPesqVaga');
        this.ui.setHidden('divLoad');
        this.pesquisouVagas.emit(this.vagasEmprego);
      }
      );

  }

  private buscaAreaProfissional() {
    if (!sessionStorage.getItem('vagaszm.areaprofissional')) {
      this.areaProfissionalAPI.buscarAreasProfissionais()
        .subscribe(resultado => {
          const dadosVagas: any = resultado;
          if (dadosVagas.sucesso) {
            sessionStorage.setItem('vagaszm.areaprofissional', JSON.stringify(dadosVagas.dados));
            this.areasProfissionais = JSON.parse(sessionStorage.getItem('vagaszm.areaprofissional'));
          }
        });
    }
    else {
      this.areasProfissionais = JSON.parse(sessionStorage.getItem('vagaszm.areaprofissional'));
    }
  }

  private buscaTipoContratacao() {
    if (!sessionStorage.getItem('vagaszm.tipocontratacao')) {
      this.tipoContratacaoAPI.buscarTipoContratacao()
        .subscribe(resultado => {
          const resposta: any = resultado;
          if (resposta.sucesso) {
            sessionStorage.setItem('vagaszm.tipocontratacao', JSON.stringify(resposta.dados));
            this.tiposContratacao = JSON.parse(sessionStorage.getItem('vagaszm.tipocontratacao'));
          }
        });
    }
    else {
      this.tiposContratacao = JSON.parse(sessionStorage.getItem('vagaszm.tipocontratacao'));
    }
  }

  limparFiltros() {
    this.frmPesquisaVaga.get('cargo').setValue(null);
    this.frmPesquisaVaga.get('descricao').setValue(null);
    this.frmPesquisaVaga.get('areaProfissionalId').setValue(null);
    this.frmPesquisaVaga.get('tipoContratacaoId').setValue(null);
    this.frmPesquisaVaga.get('salarioInicial').setValue(0);
    this.frmPesquisaVaga.get('salarioFinal').setValue(0);
    this.frmPesquisaVaga.get('status').setValue(0);
  }

}
