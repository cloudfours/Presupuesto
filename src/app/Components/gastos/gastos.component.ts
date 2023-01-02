import { PresupuestoService } from 'src/app/service/presupuesto.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
constructor(private _presupuestoService:PresupuestoService,private router:Router){

}
ngOnInit(): void {
if(this._presupuestoService.presupuesto===0){
this.router.navigate(['/ingresarPresupuesto']);
}
  console.log(this._presupuestoService.presupuesto)
  
}
}
