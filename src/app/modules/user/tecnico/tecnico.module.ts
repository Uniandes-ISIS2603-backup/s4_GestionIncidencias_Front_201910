import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnicoListComponent } from './tecnico-list/tecnico-list.component';
import { TecnicoCreateComponent } from './tecnico-create/tecnico-create.component';
import { TecnicoEditComponent } from './tecnico-edit/tecnico-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TecnicoListComponent, TecnicoCreateComponent, TecnicoEditComponent]
})
export class TecnicoModule { }
