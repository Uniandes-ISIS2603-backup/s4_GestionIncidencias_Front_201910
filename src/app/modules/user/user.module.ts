import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnicoCreateComponent } from './tecnico-create/tecnico-create.component';
import { TecnicoEditComponent } from './tecnico-edit/tecnico-edit.component';
import { TecnicoListComponent } from './tecnico-list/tecnico-list.component';
import { TecnicoDetailComponent } from './tecnico-detail/tecnico-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TecnicoCreateComponent, TecnicoEditComponent, TecnicoListComponent, TecnicoDetailComponent]
})
export class UserModule { }
