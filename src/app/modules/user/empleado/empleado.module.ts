import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import { AppRoutingModule } from '../../../app-routing/app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule } from '@angular/material';

import { EmpleadoCreateComponent } from './empleado-create/empleado-create.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { EmpleadoEditComponent } from './empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
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
    MatIconModule,
    MatGridListModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates:false
    })
    
    
    
  ],
  exports: [
    MatDialogModule,
    MatIconModule,
    
  ],
  entryComponents: [
    EmpleadoCreateComponent, EmpleadoDetailComponent, EmpleadoEditComponent, EmpleadoListComponent
  ],
  
  declarations: [EmpleadoCreateComponent, EmpleadoDetailComponent, EmpleadoEditComponent, EmpleadoListComponent]
})
export class EmpleadoModule { }
