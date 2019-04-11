import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import { equipoComputoListComponent } from './equipoComputo-list/equipoComputo-list.component';
import { equipoComputoCreateComponent } from './equipoComputo-create/equipoComputo-create.component';
import { equipoComputoEditComponent } from './equipoComputo-edit/equipoComputo-edit.component';

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
  declarations: [equipoComputoListComponent, equipoComputoCreateComponent, equipoComputoEditComponent]
})
export class equipoComputoModule { }
