import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenyEmpleadoComponentComponent } from '../menuEmpleado/meny-empleado-component/meny-empleado-component.component';
import { MenuEmpleadoComponent } from './menu-empleado/menu-empleado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenyEmpleadoComponentComponent, MenuEmpleadoComponent]
})
export class MenuEmpleadoModule { }
