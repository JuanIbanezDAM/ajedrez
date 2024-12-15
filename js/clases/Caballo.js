import Pieza from './Pieza.js';

export default class Caballo extends Pieza {
    //ATRIBUTOS

    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //METODOS
    esMovimientoValido(destino, tablero) {
        const filaActual = this.position.row;
        const columnaActual = this.position.column;

        // Calcular las diferencias entre filas y columnas
        const diferenciaFila = Math.abs(destino.row - filaActual);
        const diferenciaColumna = Math.abs(destino.column - columnaActual);

        // Validar el movimiento en "L" (2-1 o 1-2)
        if (
            (diferenciaFila === 2 && diferenciaColumna === 1) ||
            (diferenciaFila === 1 && diferenciaColumna === 2)
        ) {
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