import Pieza from './Pieza.js';

export default class Peon extends Pieza {
    //ATRIBUTOS
    /* 
    color   : String
    position : Object {row, column}
    */

    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //GETERS Y SETERS

    //METODOS
    // Funcion para valdiar movimientos validos
    esMovimientoValido(destino, tablero) {
        const direccion = this.color === "blanco" ? -1 : 1; // Direccion que puede tomar segun el color
        const filaActual = this.position.row;
        const columnaActual = this.position.column;

        // Movimiento hacia adelante
        if (destino.column === columnaActual) {
            // Movimiento de 1 fila
            if (
                destino.row === filaActual + direccion &&
                !tablero[destino.row][destino.column] // Celda de destino vacía
            ) {
                return true;
            }

            // Movimiento de 2 filas (solo primer movimiento)
            if (
                destino.row === filaActual + direccion * 2 &&
                (this.moves.length == 1) && // Aun no ha movido
                !tablero[(filaActual + direccion)][columnaActual] && // Celda intermedia vacia
                !tablero[destino.row][destino.column] // Celda de destino vacia
            ) {
                return true;
            }
        }

        return false; // Si ninguna de las condiciones se cumple, el movimiento no es valido
    }
}