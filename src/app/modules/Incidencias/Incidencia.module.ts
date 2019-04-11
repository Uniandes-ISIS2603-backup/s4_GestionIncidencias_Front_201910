import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {IncidenciaListComponent} from './incidencia-list/incidencia-list.component';
import {IncidenciaService } from './incidencia.service';
import {AppRoutingModule} from '../../app-routing/app-routing.module';

import {ActuacionModule} from '../actuacion/actuacion.module';

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
    declarations: [],
    providers: []
})
export class IncidencialModule {}