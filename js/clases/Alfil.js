import Pieza from './Pieza.js';

export default class Alfil extends Pieza {
    //ATRIBUTOS

    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //METODOS
    // Funcion para valdiar movimientos validos del alfil
    esMovimientoValido(destino, tablero) {
        const filaActual = this.position.row;
        const columnaActual = this.position.column;

        // Verificar si el movimiento es diagonal
        if (Math.abs(destino.row - filaActual) === Math.abs(destino.column - columnaActual)) {
            // Usar el método esCaminoLibre para validar el camino
            if (this.esCaminoLibre(destino, tablero)) {
                const piezaDestino = tablero[destino.row][destino.column];
                // Verificar si el destino está vacío o tiene una pieza enemiga
                return !piezaDestino || piezaDestino.color !== this.color;
            }
        }

        return false; // Movimiento no valido
    }
    //GETERS Y SETERS

}