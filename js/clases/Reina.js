import Pieza from './Pieza.js';

export default class Reina extends Pieza {

    //ATRIBUTOS
    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //METODOS

    esMovimientoValido(destino, tablero) {
        
        const deltaRow = Math.abs(destino.row - this.position.row);
        const deltaCol = Math.abs(destino.column - this.position.column);

        // El rey se mueve una casilla en cualquier dirección
        return deltaRow <= 1 && deltaCol <= 1;
    }


    //GETERS Y SETERS

}