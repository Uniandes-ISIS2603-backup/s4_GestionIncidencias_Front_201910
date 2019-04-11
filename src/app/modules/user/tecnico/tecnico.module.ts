import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import {AppRoutingModule} from '../../../app-routing/app-routing.module';
import { TecnicoListComponent } from './tecnico-list/tecnico-list.component';
import { TecnicoCreateComponent } from './tecnico-create/tecnico-create.component';
import { TecnicoEditComponent } from './tecnico-edit/tecnico-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule,
    AppRoutingModule
  ],
  declarations: [TecnicoListComponent, TecnicoCreateComponent, TecnicoEditComponent]
})
export class TecnicoModule { }
