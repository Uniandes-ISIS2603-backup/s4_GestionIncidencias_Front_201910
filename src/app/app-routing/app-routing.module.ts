import { NgModule, Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {ActuacionListComponent} from '../modules/actuacion/actuacion-list/actuacion-list.component'
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { HomeComponent } from '../home/home/home.component';
import { EmpleadoListComponent } from '../modules/user/empleado/empleado-list/empleado-list.component'
import { TecnicoListComponent } from '../modules/user/tecnico/tecnico-list/tecnico-list.component';
import { equipoComputoListComponent } from '../modules/equipoComputo/equipoComputo-list/equipoComputo-list.component';
import { calificacionListComponent } from '../modules/calificacion/calificacion-list/calificacion-list.component';
import { EmpleadoEditComponent } from '../modules/user/empleado/empleado-edit/empleado-edit.component';
import { AdministradorListComponent } from '../modules/user/administrador/administrador-list/administrador-list.component'
import { PrioridadListComponent } from '../modules/prioridad/prioridad-list/prioridad-list.component';
import {IncidenciaListComponent} from '../modules/Incidencias/incidencia-list/incidencia-list.component'

//Service

import {AuthService} from "../modules/login/auth.service";

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'empleados',
        
        children: [
            {
                path: 'list',
                component: EmpleadoListComponent
            },
            {
                path: ':id/edit',
                component: EmpleadoEditComponent,     
            }          
               
        ]
    },
    {
        path: 'equipos',
        
        children: [
            {
                path: 'list',
                component: equipoComputoListComponent
            }]
    },
    {
        path: 'prioridades',
        
        children: [
            {
                path: 'list',
                component: PrioridadListComponent
            }]
    },
    {
        path: 'calificaciones',
        
        children: [
            {
                path: 'list',
                component: calificacionListComponent
            }]
    },
    {
        path: 'tecnicos',
        
        children: [
            {
                path: 'list',
                component: TecnicoListComponent
            }]},

        {
        path: 'administradores',
        component:AdministradorListComponent,
        children: [
            {
                path: 'list',
                component: AdministradorListComponent
            }]
    }, 
     
        {
        path: 'actuaciones',
        
        children: [
            {
                path: 'list',
                component: ActuacionListComponent
            }]
    }, 
    {
        path: 'incidencias',
        
        children: [
            {
                path: 'list',
                component: IncidenciaListComponent
            }]
    }, 
    
      
   
     
    {
        path: '**',
        redirectTo: 'home'
    }

   
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: [],
    providers:[AuthService]
})
export class AppRoutingModule {

}
