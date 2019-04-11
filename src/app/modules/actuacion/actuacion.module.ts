import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import {ActuacionListComponent} from './actuacion-list/actuacion-list.component';

import {ActuacionDetailComponent} from './actuacion-detail-list/actuacion-detail.component';
import {ActuacionCreateComponent} from  './actuacion-create/actuacion-create.component';
import {ActuacionEditComponent} from './actuacion-edit/actuacion-edit.component';
import {ActuacionService} from './actuacion.service';

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
       ActuacionListComponent,ActuacionDetailComponent, ActuacionCreateComponent,ActuacionEditComponent
    ],
    providers: [ActuacionService],
    exports: [ActuacionListComponent, ActuacionDetailComponent]
})
export class ActuacionModule {}