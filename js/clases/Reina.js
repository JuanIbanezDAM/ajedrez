import Pieza from './Pieza.js';

export default class Reina extends Pieza {
    //ATRIBUTOS
    /* 
    color   : String
    position : Object {row, column}
     */
    //CONSTRUCTOR

    constructor(color, position) {
        super(color, position);
    }

    //METODOS
    // Funcion para valdiar movimientos validos de la reina
    esMovimientoValido(destino, tablero) {
        const filaActual = this.position.row;
        const columnaActual = this.position.column;

        // Verificar si el movimiento es diagonal, horizontal o vertical
        const esDiagonal = Math.abs(destino.row - filaActual) === Math.abs(destino.column - columnaActual);
        const esRecto = destino.row === filaActual || destino.column === columnaActual;

        if ((esDiagonal || esRecto) && this.esCaminoLibre(destino, tablero)) {
            const piezaDestino = tablero[destino.row][destino.column];
            return !piezaDestino || piezaDestino.color !== this.color;
        }

        return false; // Movimiento no válido
    }

    //GETERS Y SETERS

}