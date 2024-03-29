import { NgModule, Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ActuacionListComponent} from '../modules/actuacion/actuacion-list/actuacion-list.component'
import { HomeComponent } from '../home/home/home.component';
import { EmpleadoListComponent } from '../modules/user/empleado/empleado-list/empleado-list.component'
import { TecnicoListComponent } from '../modules/user/tecnico/tecnico-list/tecnico-list.component';
import { equipoComputoListComponent } from '../modules/equipoComputo/equipoComputo-list/equipoComputo-list.component';
import { calificacionListComponent } from '../modules/calificacion/calificacion-list/calificacion-list.component';
import { EmpleadoEditComponent } from '../modules/user/empleado/empleado-edit/empleado-edit.component';

import { PrioridadListComponent } from '../modules/prioridad/prioridad-list/prioridad-list.component';
import { IncidenciaListComponent  } from '../modules/Incidencias/incidencia-list/incidencia-list.component'
import { MenuComponent } from '../modules/user/administrador/menu/menu.component'

//Service


import { EmpleadoCreateComponent } from '../modules/user/empleado/empleado-create/empleado-create.component';
import { LoginComponent } from '../modules/login/login/login.component';


import { IncidenciasComponent } from "../modules/incidencias/incidencias-crear/incidencias-crear.component";

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
import { IncidenciasMenuTecnicoComponent } from '../modules/Incidencias/incidencias-menu-tecnico/incidencias-menu-tecnico.component';
import { IncidenciasMenuEmpleadoComponent } from '../modules/Incidencias/incidencias-menu-empleado/incidencias-menu-empleado.component';
import { equipoComputoEditComponent } from '../modules/equipoComputo/equipoComputo-edit/equipoComputo-edit.component';    

const routes: Routes = [
     {path:'menuAdministrador/:id',component: MenuComponent, canActivate:[ModulesGuard] },
     {path:'listarEmpleados/:id', component:EmpleadoListComponent, canActivate:[ModulesGuard]},
     {path:'listarTecnicos/:id', component:TecnicoListComponent, canActivate:[ModulesGuard]},
     {path:'listarTecnicos', component:TecnicoListComponent, canActivate:[ModulesGuard]},
     {path:'listarIncidencias/:id', component:  IncidenciaListComponent, canActivate:[ModulesGuard]},
     {path:'listarEquipos/:id', component:equipoComputoListComponent, canActivate:[ModulesGuard]},
     {path:'crearEmpleado/:id', component:EmpleadoCreateComponent, canActivate:[ModulesGuard]},
     {path:'crearIncidencia/:id', component:IncidenciasComponent},

     //Aca esta el error
     {path:'crearEquipo/:id', component:equipoComputoCreateComponent},
    
     {path:'crearIncidencia/:id', component:IncidenciasComponent, canActivate:[GuardEmpleadoGuard]},

     {path:'ListarIncidencias/:id', component:IncidenciaListComponent},

     {path:'login/:tipo', component:LoginComponent},
     {path:'editarEmpleado/:id/:idAmi', component:EmpleadoEditComponent},
     {path:'crearTecnico/:id', component:TecnicoCreateComponent, canActivate:[ModulesGuard]},
     {path:'editarTecnico/:id/:idAdmi', component:TecnicoEditComponent},
     {path:'editarEquipo/:id/:idAdmi', component:equipoComputoEditComponent},
     {path:'menuEmpleado/:id', component:MenuEmpleadoComponent,canActivate:[GuardEmpleadoGuard]},
     {path:'menuTecnico/:id', component:TecnicoMenuComponent,canActivate:[GuardTecnicoGuard]},
     {path:'empleadoDetalle/:id',component: EmpleadoDetailComponent,canActivate:[GuardEmpleadoGuard]},
     {path:'detalleTecnico/:id',component: TecnicoDetailComponent,canActivate:[GuardTecnicoGuard]},
     {path:'detalleAdmin/:id',component: TecnicoDetailComponent,canActivate:[GuardTecnicoGuard]},
     {path:'listarIncidenciaEmpleado/:id/:idAdmi', component: IncidenciasEmpleadoComponent,canActivate:[ModulesGuard]},
     {path:'listarIncidenciasTecnico/:id/:idAdmi', component:IncidenciasTecnicoComponent, canActivate:[ModulesGuard]},     
     {path:'listarIncidenciasMenuTecnico/:id', component:IncidenciasMenuTecnicoComponent,canActivate:[GuardTecnicoGuard]},
     {path:'listarIncidenciasMenuEmpleado/:id', component:IncidenciasMenuEmpleadoComponent,canActivate:[GuardEmpleadoGuard]},
     
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
