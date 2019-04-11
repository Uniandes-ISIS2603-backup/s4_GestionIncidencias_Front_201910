import {Incidencia} from "./Incidencia";
import {Actuacion} from "../actuacion/actuacion";

export class IncidenciaDetail extends Incidencia{

constructor(){
    super();
}

/**
 * La lista de actuaciones de la incidencia
 */
actuaciones: Actuacion[];

}

