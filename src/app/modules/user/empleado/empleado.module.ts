import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoCreateComponent } from './empleado-create/empleado-create.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { EmpleadoEditComponent } from './empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmpleadoCreateComponent, EmpleadoDetailComponent, EmpleadoEditComponent, EmpleadoListComponent]
})
export class EmpleadoModule { }
