import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable()
export class EmpresaAPI{
    constructor(private http:HttpClient){

    }

    cadastrarEmpresa(dados:any){
        const url:string = environment.serviceUrl + 'v1/empresa';                        
        return this.http.post(url, dados);        
    }
}