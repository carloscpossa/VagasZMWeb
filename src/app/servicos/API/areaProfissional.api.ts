import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable()
export class AreaProfissionalAPI {    

    constructor(private http: HttpClient) {

    }

    buscarAreasProfissionais() {
        const url : string = environment.serviceUrl + "v1/areaprofissional";

        return this.http.get(url);
    }

}