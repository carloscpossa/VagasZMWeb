import { Injectable } from "@angular/core";

@Injectable()
export class VagaEmprego {

    constructor(public empresaId: string,
        public cargo: string,
        public descricao: string,
        public beneficios: string,
        public areaProfissionalId: string,
        public horarioTrabalho: string,
        public salarioAcombinar: boolean,
        public salario: number,
        public tipoContratacaoId: string
    ) {
        this.empresaId = JSON.parse(localStorage.getItem('vagaszm.usuarioempresa')).empresaId;
    }

}