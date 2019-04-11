import { userInterface } from "../User-interface";
/**
 * Clase para modelar un administrador
 * @author Juan Pablo Correa Puerta
 */
export class Administrador implements userInterface
{
    /**
     * Nombre del administrador
     */
    name:string;

    /**
     * Cédulad del administrador
     */
    cedula:string;

    /**
     * Identificación del administrador
     */
    id:number;

    /**
     * Usuario del administrador
     */
    usuario:string;

    /**
     * Contraseña del administrador
     */
    password:string;
}
