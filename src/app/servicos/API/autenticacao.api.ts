import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";


@Injectable()
export class AutenticacaoAPI{

    constructor(private http:HttpClient){

    }

    autenticarEmpresa(dados:any){
        const url:string = environment.serviceUrl + 'v1/autenticacaoempresa';

        var dt = "grant_type=password&email=" + dados.email + "&senha=" + dados.senha;
        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { 
            headers: headers 
        };
        return this.http.post(url, dt, options);
    }

}