import { Component, OnInit } from '@angular/core';
import { VagaEmpregoAPI } from '../../../servicos/API/vagaEmprego.api';

@Component({
  selector: 'app-carrossel-principal',
  templateUrl: './carrossel-principal.component.html',
  providers: [VagaEmpregoAPI]
})
export class CarrosselPrincipalComponent implements OnInit {

  public vagas: any[];

  constructor(private vagaApi: VagaEmpregoAPI) { }

  ngOnInit() {
    this.vagaApi.RetornaUltimasVagasAbertas().subscribe(resultado => {
      const resposta: any = resultado;
      if (resposta.sucesso) {
        this.vagas = resposta.dados;
      }
    });

  }

}
