import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {IncidenciaListComponent} from './incidencia-list/incidencia-list.component';
import {IncidenciaService } from './Incidencia.service';
import {AppRoutingModule} from '../../app-routing/app-routing.module';

import {ActuacionModule} from '../actuacion/actuacion.module';
import {IncidenciaDetailComponent} from './incidencia-list-detail/incidencia-detail.component';
import {IncidenciaCreateComponent} from  './incidencia-create/incidencia-create.component';

import {IncidenciaEditComponent} from './incidencia-edit/incidencia-edit.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPermissionsModule,
        CommonModule,
        FormsModule,
        ActuacionModule
    ],
    declarations: [IncidenciaListComponent,IncidenciaDetailComponent, IncidenciaCreateComponent, IncidenciaEditComponent],
    providers: [IncidenciaService]
})
export class IncidenciaModule {}
