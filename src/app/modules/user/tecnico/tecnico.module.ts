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
import { TecnicoMenuComponent } from './tecnico-menu/tecnico-menu.component';
import { TecnicoDetailComponent } from './tecnico-detail/tecnico-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates:false
    })
  ],
  declarations: [TecnicoListComponent, TecnicoCreateComponent, TecnicoEditComponent, TecnicoMenuComponent, TecnicoDetailComponent]
})
export class TecnicoModule { }
