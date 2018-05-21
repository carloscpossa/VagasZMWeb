import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { AlertaComponent } from './componentes/alerta-component/alerta-component.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RodapeComponent,
    AlertaComponent
  ],
  exports:[
    RodapeComponent,
    AlertaComponent
  ]
})
export class CompartilhadoModule { }
