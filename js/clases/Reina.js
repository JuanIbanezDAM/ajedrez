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

    esMovimientoValido(destino, tablero) {
        const filaActual = this.position.row;
        const columnaActual = this.position.column;

        // Movimiento en linea recta misma fila o misma columna (Como la torre)
        if (destino.row === filaActual || destino.column === columnaActual) {

            // Verificar que no haya piezas entre origen y destino
            const pasoFila = destino.row === filaActual ? 0 : (destino.row > filaActual ? 1 : -1);
            const pasoColumna = destino.column === columnaActual ? 0 : (destino.column > columnaActual ? 1 : -1);

            let fila = filaActual + pasoFila;
            let columna = columnaActual + pasoColumna;

            // Recorrer todas las celdas entre el origen y el destino
            while (fila !== destino.row || columna !== destino.column) {
                if (tablero[fila][columna]) {
                    // Hay una pieza bloqueando el camino
                    return false;
                }
                fila += pasoFila;
                columna += pasoColumna;
            }

            // Verificar si el destino está vacío o tiene una pieza del oponente
            const piezaDestino = tablero[destino.row][destino.column];
            if (!piezaDestino || piezaDestino.color !== this.color) {
                return true;
            }

        }
        // Movimiento diagonal: |filaDestino - filaActual| === |columnaDestino - columnaActual|
        else if (Math.abs(destino.row - filaActual) === Math.abs(destino.column - columnaActual)) {

            // Determinar la dirección del movimiento
            const pasoFila = destino.row > filaActual ? 1 : -1;
            const pasoColumna = destino.column > columnaActual ? 1 : -1;

            let fila = filaActual + pasoFila;
            let columna = columnaActual + pasoColumna;

            // Verificar que no haya piezas entre origen y destino
            while (fila !== destino.row && columna !== destino.column) {
                if (tablero[fila][columna]) {
                    // Hay una pieza bloqueando el camino
                    return false;
                }
                fila += pasoFila;
                columna += pasoColumna;
            }

            // Verificar si el destino está vacío o tiene una pieza enemiga
            const piezaDestino = tablero[destino.row][destino.column];
            if (!piezaDestino || piezaDestino.color !== this.color) {
                return true;
            }
        }

        return false; // Si ninguna condición se cumple, el movimiento no es válido
    }


    //GETERS Y SETERS

}