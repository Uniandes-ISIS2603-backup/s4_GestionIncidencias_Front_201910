import {Incidencia} from "./Incidencia";
import {ActuacionR} from "./ActuacionR";


export class IncidenciaDetail extends Incidencia{

constructor(){
    super();
}

/**
 * La lista de actuaciones de la incidencia
 */
actuaciones: ActuacionR[];

}
 
