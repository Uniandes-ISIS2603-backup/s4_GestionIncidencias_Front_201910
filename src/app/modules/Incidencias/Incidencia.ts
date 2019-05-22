import { Tecnico } from "../user/tecnico/tecnico";
import { Empleado } from "../user/empleado/empleado";
import { calificacion } from "../calificacion/calificacion";
import { equipoComputo } from '../equipoComputo/equipoComputo';
import { Actuacion } from "../actuacion/actuacion";


export class Incidencia{

/***
 * Identificador de la incidencia
 */

 id: number;

/***
 * fecha de la incidencia
 */

 fecha: Date;
 /***
 * descripcion de la incidencia
 */
descripcion : string;
/***
 * estado de la incidencia
 */
estado: string;
/***
 * calificacion de la incidencia
 */
calificacion: calificacion;
/***
 * tecnico de la incidencia
 */
tecnico : Tecnico;
/***
 * empleado de la incidencia
 */
empleado : Empleado;
/***
 * prioridad de la incidencia
 */
prioridad : string;
/**
 * Equipo computo
 */
equipoComputo:equipoComputo;
/**
 * Actuaciones que se le ha hecho a la incidenca
 */
actuaciones: Actuacion[];
}