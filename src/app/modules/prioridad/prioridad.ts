import { Sla } from "./Sla";

export class Prioridad {

    /**
     * Atributo  que representa el tipo de una Prioridad
     */
    tipoPrioridad : string;
    sla = Sla;
  
    
    constructor(priori, sla){
        this.tipoPrioridad = priori;
        this.sla = sla;
    }
    }