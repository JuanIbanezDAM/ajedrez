import Torre from './clases/Torre.js';
import Caballo from './clases/Caballo.js';
import Alfil from './clases/Alfil.js';
import Reina from './clases/Reina.js';
import Rey from './clases/Rey.js';
import Peon from './clases/Peon.js';

export default class Jugador {
    //ATRIBUTOS
    /* 
    nombre
    color
    piezas []
    */

    //CONSTRUCTOR
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color
        this.piezas = [];
        this.crearPiezas();
    }

    //GETERS Y SETERS

    //METODOS
    //Crear y posicionar todas las piezas iniciales negras o blancas
    crearPiezas() {
        // Mapeo de los nombres de las piezas a sus clases
        const clasesPiezas = {
            Rey: Rey,
            Reina: Reina,
            Peon: Peon,
            Alfil: Alfil,
            Caballo: Caballo,
            Torre: Torre
        };

        // Configuracion inicial segun el color
        const filaPiezas = this.color === "negro" ? 0 : 7;
        const filaPeones = this.color === "negro" ? 1 : 6;

        // Orden de las piezas en la fila principal
        const ordenPiezas = ["Torre", "Caballo", "Alfil", "Reina", "Rey", "Alfil", "Caballo", "Torre"];

        // Crear piezas principales
        for (let columna = 0; columna < 8; columna++) {
            const ClasePieza = clasesPiezas[ordenPiezas[columna]];
            this.piezas.push(new ClasePieza(this.color, { row: filaPiezas, column: columna }));
        }

        // Crear peones
        for (let columna = 0; columna < 8; columna++) {
            this.piezas.push(new clasesPiezas["Peon"](this.color, { row: filaPeones, column: columna }));
        }
    }
}



