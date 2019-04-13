import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import {PrioridadListComponent} from './prioridad-list/prioridad-list.component';

import {PrioridadCreateComponent} from  './prioridad-create/prioridad-create.component';
import {PrioridadService} from './prioridad.service';
import { PrioridadDetailComponent } from './prioridad-detail/prioridad-detail.component';
import { PrioridadEditComponent } from './prioridad-edit/prioridad-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ],
    declarations: [
        PrioridadListComponent, PrioridadCreateComponent, PrioridadDetailComponent, PrioridadEditComponent
    ],
    providers: [PrioridadService],
    exports: [PrioridadListComponent, PrioridadCreateComponent]
})
export class PrioridadModule {}