import { PresupuestoService } from 'src/app/service/presupuesto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = ''
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = 'Nombre de gasto o cantidad incorrecta';
  }
  agregarTarea() {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true
      this.textIncorrecto = 'cantidad mayor al presupuesto restante'
      return;
    }
    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre de gasto o cantidad incorrecta';
    } else {
      //creamos un objeto
      const GASTO = {
        nombreGasto: this.nombreGasto,
        cantidad: this.cantidad,
      }
      //enviamos el objeto via subjet
      this._presupuestoService.agregarGasto(GASTO)
      //resteamos formulario
      this.nombreGasto = ''
      this.cantidad = 0;
      this.formularioIncorrecto = false;
    }
  }
}
