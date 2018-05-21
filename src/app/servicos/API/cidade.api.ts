import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable()
export class CidadeAPI{
    constructor(private http:HttpClient){
        
    }

    buscarPorCidadesPorUf(uf:string){
        let estado = "MG";
        if (uf!=null || uf.trim()!=""){
            estado=uf;
        }

        const url = environment.serviceUrl + "v1/cidades/" + estado;        
        return this.http.get(url);                        
    }

}