import Pieza from './Pieza.js';

export default class Caballo extends Pieza {
    //ATRIBUTOS

    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //GETERS Y SETERS
    
    //METODOS
    // Funcion para valdiar movimientos validos del caballo
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
            // Verificar si el destino esta vacio o tiene una pieza enemiga
            const piezaDestino = tablero[destino.row][destino.column];
            if (!piezaDestino || piezaDestino.color !== this.color) {
                return true;
            }
        }
        return false; // Si ninguna condicion se cumple, el movimiento no es valido
    }

}