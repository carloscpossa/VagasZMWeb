import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { VagaEmprego } from "../Modelo/VagaEmprego";


@Injectable()
export class VagaEmpregoAPI {

    constructor(private http: HttpClient) {

    }

    RetornaQuantidadeVagasAbertas() {
        const url: string = environment.serviceUrl + "v1/vagaemprego/quantidadevagasabertas";
        return this.http
            .get(url);
    }

    RetornaUltimasVagasAbertas() {
        const url: string = environment.serviceUrl + "v1/vagaemprego/ultimasvagasabertas";
        return this.http
            .get(url);
    }

    PublicaVagaEmprego(dados: VagaEmprego) {

        const url: string = environment.serviceUrl + "v1/vagaemprego";

        const token = localStorage.getItem('vagaszm.tokenempresa');

        let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });                
        let options = { headers: headers };

        return this.http
            .post(url, dados, options);
    }

    BuscarVagasEmpresa(cargo: string, descricao: string, areaProfissionalId: any, tipoContratacaoId: any, salarioInicial: number, salarioFinal: number, status: number) {
        
        const url: string = environment.serviceUrl + "v1/vagaemprego/empresa";
        const token = localStorage.getItem('vagaszm.tokenempresa');

        let headers = new HttpHeaders({ 'Content-Type': 'application/json',  'Authorization': `Bearer ${token}`})
        //headers.append('Authorization', `Bearer ${token}`);        

        let parametros = new HttpParams();
        if (cargo) {
            parametros = parametros.append('cargo', cargo);
        }        

        if (descricao){
            parametros = parametros.append('descricao', descricao);
        }

        if (areaProfissionalId){
            parametros = parametros.append('areaProfissionalId', areaProfissionalId);
        }

        if (tipoContratacaoId){
            parametros = parametros.append('tipoContratacaoId', tipoContratacaoId);
        }

        if (status){
            parametros = parametros.append('status', status.toString());
        }

        if (salarioInicial && salarioFinal){
            parametros = parametros.append('salarioInicial', salarioInicial.toString());
            parametros = parametros.append('salarioFinal', salarioFinal.toString());
        }        

        return this.http.get(url, {
            params: parametros,
            headers: headers
        });                        
    }

}