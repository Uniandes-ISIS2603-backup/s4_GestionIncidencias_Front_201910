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

import { TecnicoCreateComponent } from '../modules/user/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoEditComponent } from '../modules/user/tecnico/tecnico-edit/tecnico-edit.component';
import { Globals } from '../globals';
import { ModulesGuard } from '../modules.guard';

import { TecnicoMenuComponent } from '../modules/user/tecnico/tecnico-menu/tecnico-menu.component';
import { MenuEmpleadoComponent } from '../modules/user/empleado/menu-empleado/menu-empleado/menu-empleado.component';
import { EmpleadoDetailComponent } from '../modules/user/empleado/empleado-detail/empleado-detail.component';
import { GuardEmpleadoGuard } from '../guard-empleado.guard';
import { TecnicoDetailComponent } from '../modules/user/tecnico/tecnico-detail/tecnico-detail.component';
import { GuardTecnicoGuard } from '../guard-tecnico.guard';
import { equipoComputoCreateComponent } from '../modules/equipoComputo/equipoComputo-create/equipoComputo-create.component';
import { IncidenciasEmpleadoComponent } from '../modules/Incidencias/incidencias-empleado/incidencias-empleado.component';
import { IncidenciasTecnicoComponent } from '../modules/Incidencias/incidencias-tecnico/incidencias-tecnico.component';
    

const routes: Routes = [
     {path:'menuAdministrador/:id',component: MenuComponent, canActivate:[ModulesGuard] },
     {path:'listarEmpleados/:id', component:EmpleadoListComponent, canActivate:[ModulesGuard]},
     {path:'listarTecnicos/:id', component:TecnicoListComponent, canActivate:[ModulesGuard]},
     {path:'listarTecnicos', component:TecnicoListComponent, canActivate:[ModulesGuard]},
     {path:'listarIncidencias', component:IncidenciaListComponent, canActivate:[ModulesGuard]},
     {path:'listarEquipos/:id', component:equipoComputoListComponent, canActivate:[ModulesGuard]},
     {path:'crearEmpleado/:id', component:EmpleadoCreateComponent, canActivate:[ModulesGuard]},
     {path:'crearEquipo/:id', component:equipoComputoCreateComponent},
     {path:'login/:tipo', component:LoginComponent},
     {path:'editarEmpleado/:id/:idAmi', component:EmpleadoEditComponent},
     {path:'crearTecnico/:id', component:TecnicoCreateComponent, canActivate:[ModulesGuard]},
     {path:'editarTecnico/:id/:idAdmi', component:TecnicoEditComponent},
     {path:'menuEmpleado/:id', component:MenuEmpleadoComponent,canActivate:[GuardEmpleadoGuard]},
     {path:'menuTecnico/:id', component:TecnicoMenuComponent,canActivate:[GuardTecnicoGuard]},
     {path:'empleadoDetalle/:id',component: EmpleadoDetailComponent,canActivate:[GuardEmpleadoGuard]},
     {path:'detalleTecnico/:id',component: TecnicoDetailComponent,canActivate:[GuardTecnicoGuard]},
     {path:'listarIncidenciaEmpleado/:id/:idAdmi', component: IncidenciasEmpleadoComponent,canActivate:[ModulesGuard]},
     {path:'listarIncidenciasTecnico/:id/:idAdmi', component:IncidenciasTecnicoComponent, canActivate:[ModulesGuard]},     
     
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
s
}
