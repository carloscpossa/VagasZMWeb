import {FormControl} from '@angular/forms';

export class ValidacoesCustomizadas{
   
    static NumeroPositivo(controle: FormControl) {
        var value: number = controle.value.toString().replace(/[^0-9]/g, '');

        if (value < 0) {
            return {
                "Número inválido": true
            };
        }

        return null;
    }

    static CEP(controle: FormControl) {
        var value: String = controle.value.toString().replace(/[^0-9]/g, '').slice(0, 8);        

        if (value.length != 8) {
            return {
                "CEP inválido": true
            };
        }

        return null;
    }

    static SelectInput(controle: FormControl) {
        var value: number = controle.value.toString();        

        if (value == 0) {
            return {
                "Selecione uma opção.": true
            };
        }

        return null;
    }

    static Email(controle: FormControl) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;                
        if (!re.test(controle.value)) {
            return { "E-mail inválido": true };
        }

        return null;
    }

}