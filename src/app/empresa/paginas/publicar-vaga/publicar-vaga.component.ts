import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AreaProfissionalAPI } from '../../../servicos/API/areaProfissional.api';
import { TipoContratacaoAPI } from '../../../servicos/API/tipoContratacao.api';
import { Ui } from '../../../servicos/interfaceDeUsuario/interface.usuario';
import { VagaEmpregoAPI } from '../../../servicos/API/vagaEmprego.api';
import { AlertaServico } from '../../../servicos/interfaceDeUsuario/alerta.servico';
import { VagaEmprego } from '../../../servicos/Modelo/VagaEmprego';
import { ValidacoesCustomizadas } from '../../../Validacoes/ValidacoesCustomizadas';



@Component({
  selector: 'app-publicar-vaga',
  templateUrl: './publicar-vaga.component.html',
  providers: [AreaProfissionalAPI, TipoContratacaoAPI, Ui, VagaEmpregoAPI]
})
export class PublicarVagaComponent implements OnInit {

  public frmVaga: FormGroup;
  public areasProfissionais: any[] = [];
  public tiposContratacao: any[] = [];
  public erros: any[] = [];


  constructor(private fb: FormBuilder,
    private areaProfissionalAPI: AreaProfissionalAPI,
    private tipoContratacaoAPI: TipoContratacaoAPI,
    private ui: Ui,
    private vagaEmpregoAPI: VagaEmpregoAPI,
    private alertaServico: AlertaServico) {        

    this.frmVaga = this.fb.group({
      cargo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ])],
      descricao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      beneficios: ['', Validators.compose([])],
      areaProfissionalId: ['', Validators.compose([
        Validators.required
      ])],
      horarioTrabalho: ['', Validators.compose([])],
      salarioAcombinar: ['', Validators.compose([])],
      salario: ['', Validators.compose([])],
      tipoContratacaoId: ['', Validators.compose([
        Validators.required
      ])]
    });        

    this.frmVaga.get('salarioAcombinar').setValue(false);
    this.frmVaga.get('salario').setValue(0);
  }

  private buscaAreaProfissional() {
    if (!sessionStorage.getItem('vagaszm.areaprofissional')) {
      this.areaProfissionalAPI.buscarAreasProfissionais()
        .subscribe(resultado => {
          const resposta: any = resultado;
          if (resposta.sucesso) {
            sessionStorage.setItem('vagaszm.areaprofissional', JSON.stringify(resposta.dados));
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


  ngOnInit() {    
    this.buscaAreaProfissional();
    this.buscaTipoContratacao();    
  }

  publicarVaga() {    

    const vagaEmprego = new VagaEmprego("",
      this.frmVaga.get('cargo').value,
      this.frmVaga.get('descricao').value,
      this.frmVaga.get('beneficios').value,
      this.frmVaga.get('areaProfissionalId').value,
      this.frmVaga.get('horarioTrabalho').value,
      this.frmVaga.get('salarioAcombinar').value,
      this.frmVaga.get('salario').value,
      this.frmVaga.get('tipoContratacaoId').value
    );


    this.alertaServico.clear();
    this.ui.lock('btnPublicarVaga');
    this.vagaEmpregoAPI.PublicaVagaEmprego(vagaEmprego)
      .subscribe(resultado => {
        const resposta: any = resultado;
        if (resposta.sucesso) {
          this.alertaServico.success('Vaga de emprego publicada com sucesso.');
        }
        this.ui.unlock('btnPublicarVaga');
      },
      erro => {
        this.erros = JSON.parse(erro._body).erros;
        for (let i = 0; i <= this.erros.length - 1; i++) {
          this.alertaServico.error(this.erros[i].message);
        }
        this.ui.unlock('btnPublicarVaga');
      });
  }

  salarioCombinar(salarioAcombinar: boolean) {
    this.frmVaga.get('salarioAcombinar').setValue(!salarioAcombinar);
    if (salarioAcombinar) {      
      this.ui.setInactive('salario');
    }
    else {
      this.ui.setActive('salario');
    }
  }

}
