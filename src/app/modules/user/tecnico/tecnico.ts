import {userInterface} from '../User-interface';
import { Incidencia } from '../../Incidencias/Incidencia';

export class Tecnico implements userInterface{    
   
    name:string;
    cedula:string;
    id:number;
    usuario:string;
    password:string; 
    incidencias:Incidencia[];
    


}