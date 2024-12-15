import Pieza from './Pieza.js';

export default class Alfil extends Pieza {
    //ATRIBUTOS

    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //METODOS
    esMovimientoValido(destino, tablero) {
        const filaActual = this.position.row;
        const columnaActual = this.position.column;

        // Movimiento diagonal: |filaDestino - filaActual| === |columnaDestino - columnaActual|
        const diferenciaFila = Math.abs(destino.row - filaActual);
        const diferenciaColumna = Math.abs(destino.column - columnaActual);

        if (diferenciaFila === diferenciaColumna) {
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

        return false; // Si no es un movimiento válido, retorna false
    }



    //GETERS Y SETERS

}