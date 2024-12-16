import Pieza from './Pieza.js';

export default class Torre extends Pieza {
    //ATRIBUTOS

    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //METODOS


    //GETERS Y SETERS
    // Funcion para valdiar movimientos validos de la torre
    esMovimientoValido(destino, tablero) {
        const filaActual = this.position.row;
        const columnaActual = this.position.column;
    
        // Verificar si el movimiento es horizontal o vertical
        if (destino.row === filaActual || destino.column === columnaActual) {
            if (this.esCaminoLibre(destino, tablero)) {
                const piezaDestino = tablero[destino.row][destino.column];
                return !piezaDestino || piezaDestino.color !== this.color;
            }
        }
    
        return false; // Movimiento no válido
    }

}