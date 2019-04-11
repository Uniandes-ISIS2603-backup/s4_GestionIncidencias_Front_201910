import { Tecnico } from "../user/tecnico/tecnico";
import { Empleado } from "../user/empleado/empleado";

export class Incidencia{



/***
 * Identificador de la incidencia
 */

 id: number;

/***
 * fecha de la incidencia
 */

 fecha: any;
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
calificacion: any;
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



 



}