import Pieza from './Pieza.js';

export default class Peon extends Pieza {

    //ATRIBUTOS
    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //METODOS

    esMovimientoValido(destino, tablero) {
        const direccion = this.color === "blanco" ? -1 : 1;
        const filaActual = this.position.row;
        const columnaActual = this.position.column;

        // Movimiento hacia adelante
        if (
            (destino.row === filaActual + direccion || // Movimiento de 1 fila
                (destino.row === filaActual + direccion * 2) && !this.move[0]) && // Movimiento de 2 filas solo al inicio
            destino.column === columnaActual && // Misma columna
            !tablero[destino.row][destino.column] // La celda de destino debe estar vacía
        ) {
            return true;
        }

        // Movimiento para capturar en diagonal
        if (
            destino.row === filaActual + direccion &&
            Math.abs(destino.column - columnaActual) === 1 &&
            tablero[destino.row][destino.column] && // Debe haber una pieza en el destino
            tablero[destino.row][destino.column].color !== this.color // No puede capturar piezas del mismo color
        ) {
            return true;
        }

        return false; // Si ninguna de las condiciones se cumple, el movimiento no es válido
    }


    //GETERS Y SETERS

}