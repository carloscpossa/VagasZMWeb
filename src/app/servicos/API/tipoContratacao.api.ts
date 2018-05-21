import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class TipoContratacaoAPI{
    constructor(private http:HttpClient){}

    buscarTipoContratacao(){
        const url = environment.serviceUrl + "v1/tipocontratacao";

        return this.http.get(url);
    }
}