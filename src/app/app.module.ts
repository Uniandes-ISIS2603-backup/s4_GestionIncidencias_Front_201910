import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { HomeModule } from './home/home.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { UserModule } from './modules/user/user.module';
import {equipoComputoModule} from './modules/equipoComputo/equipoComputo.module';
import { calificacionModule } from './modules/calificacion/calificacion.module';
import { AdministradorComponent } from './modules/user/administrador/administrador.component';
import { PrioridadModule } from './modules/prioridad/prioridad.module';
import { ActuacionModule } from './modules/actuacion/actuacion.module';
import {IncidenciaModule} from './modules/Incidencias/incidencia.module';
import { LoginModule} from './modules/login/login.module';
import { MenuComponent } from './app/modules/user/administrador/menu/menu.component'
import { FooterComponent } from './modules/footer/footer/footer.component';
import { Globals } from './globals';
import { MenuEmpleadoModule } from './modules/user/empleado/menu-empleado/menu-empleado.module';


@NgModule({
    declarations: [
        AppComponent,
        AdministradorComponent,
        MenuComponent,   
        FooterComponent         
    ],
    imports: [
        HomeModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-top-right',
            preventDuplicates:true
          }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,        
        UserModule,
        equipoComputoModule,
        calificacionModule,
        PrioridadModule,
         ActuacionModule,
        IncidenciaModule,
        LoginModule,
        MenuEmpleadoModule
      
    ],
    bootstrap: [AppComponent],
    providers: [Globals, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
    
        }
    ]
    
})
export class AppModule {}
