import {userInterface} from '../User-interface';
import { Incidencia } from '../../Incidencias/Incidencia';

export class Empleado implements userInterface{

    /** 
     * atributo con el mobre del empleado
     */
    name:string;

    /**
     * atributo con la cedula del empleado
     */
    cedula:string;

    /**
     * atributo con el id del empleado
     */
    id:number;

    /**
     * atributo con el usuario del empleado
     */
    usuario:string;

    /**
     * atributo con la contraseña del empleado
     */
    password:string;    

    /**
     * atributo con la incidencia del empleado
     */
    incidencias:Incidencia[];

}