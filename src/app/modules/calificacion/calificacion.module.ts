import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import { calificacionListComponent } from './calificacion-list/calificacion-list.component';
import { calificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { calificacionEditComponent } from './calificacion-edit/calificacion-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule
  ],
  declarations: [calificacionListComponent, calificacionCreateComponent, calificacionEditComponent]
})
export class calificacionModule { }
