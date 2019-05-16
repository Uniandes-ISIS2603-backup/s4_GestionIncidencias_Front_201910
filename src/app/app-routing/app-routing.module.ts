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
import { MenuComponent } from '../modules/user/administrador/menu/menu.component'

//Service


import { EmpleadoCreateComponent } from '../modules/user/empleado/empleado-create/empleado-create.component';
import { LoginComponent } from '../modules/login/login/login.component';
import { ModulesGuard } from '../modules.guard';

const routes: Routes = [
     {path:'menuAdministrador',component: MenuComponent, canActivate:[ModulesGuard] },
     {path:'listarEmpleados', component:EmpleadoListComponent, canActivate:[ModulesGuard]},
     {path:'listarTecnicos', component:TecnicoListComponent, canActivate:[ModulesGuard]},
     {path:'listarIncidencias', component:IncidenciaListComponent, canActivate:[ModulesGuard]},
     {path:'crearEmpleado', component:EmpleadoCreateComponent, canActivate:[ModulesGuard]},
     {path:'login/:tipo', component:LoginComponent},
     {path:'editarEmpleado', component:EmpleadoEditComponent},
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
        path: '**',
        redirectTo: 'home'
    }

   
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),        
    ],
    exports: [RouterModule],
    declarations: [],
    providers:[]
})
export class AppRoutingModule {

}
