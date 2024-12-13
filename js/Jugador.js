import Peon from './clases/Peon.js';

export default class Jugador {

    //ATRIBUTOS
    piezas = [];
    //CONSTRUCTOR
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color
    }

    //METODOS
    //Crear y posicionar todas las piezas iniciales negras o blancas
    crearPiezas() {
        //Posicion inicial de la fila segun blancas o negras
        let min = this.color === "negro" ? 2 : 8;
        let max = this.color === "negro" ? 0 : 6;

        // Peones
        for (let i = max; i < min; i++) { // Filas
            for (let j = 0; j < 8; j++) { // Columnas
                this.piezas.push(new Peon(this.color, { row: i, column: j }));
            }
        }
    }

}


//GETERS Y SETERS

