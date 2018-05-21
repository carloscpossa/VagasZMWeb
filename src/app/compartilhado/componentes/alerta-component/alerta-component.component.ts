import { Component, OnInit } from '@angular/core';
import { Alerta, TipoAlerta } from './Alerta';
import { AlertaServico } from '../../../servicos/interfaceDeUsuario/alerta.servico';

@Component({
  selector: 'app-alerta-component',
  templateUrl: './alerta-component.component.html'  
})
export class AlertaComponent implements OnInit {

  alertas: Alerta[] = [];

  constructor(private alertService: AlertaServico) { }

  ngOnInit() {
      this.alertService.getAlert().subscribe((alerta: Alerta) => {
          if (!alerta) {
              // clear alerts when an empty alert is received
              this.alertas = [];
              return;
          }

          // add alert to array
          this.alertas.push(alerta);
      });
  }

  removeAlerta(alerta: Alerta) {
      this.alertas = this.alertas.filter(x => x !== alerta);
  }

  cssClass(alerta: Alerta) {
      if (!alerta) {
          return;
      }

      // return css class based on alert type
      switch (alerta.type) {
          case TipoAlerta.Success:
              return 'alert alert-success';
          case TipoAlerta.Error:
              return 'alert alert-danger';
          case TipoAlerta.Info:
              return 'alert alert-info';
          case TipoAlerta.Warning:
              return 'alert alert-warning';
      }
  }

}
