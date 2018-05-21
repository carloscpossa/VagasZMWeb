import { Component, OnInit } from '@angular/core';
import { VagaEmpregoAPI } from '../../../servicos/API/vagaEmprego.api';
import { tryParse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-numero-vagas',
  templateUrl: './numero-vagas.component.html',
  providers: [VagaEmpregoAPI]
})
export class NumeroVagasComponent implements OnInit {

  public quantidade: number = 0;

  constructor(private vagaApi: VagaEmpregoAPI) { }

  ngOnInit() {

    this.vagaApi.RetornaQuantidadeVagasAbertas().subscribe(result => {
      const resposta: any = result;
      if (resposta.sucesso) {            
        this.quantidade = resposta.dados.quantidadeVagasAbertas;
      }
    });
  }
}
