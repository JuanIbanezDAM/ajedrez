import Pieza from './Pieza.js';

export default class Rey extends Pieza {
    //ATRIBUTOS

    //CONSTRUCTOR
    constructor(color, position) {
        super(color, position);
    }

    //METODOS
    // Funcion para valdiar movimientos validos del rey
    esMovimientoValido(destino, tablero) {

        const diferenciaFila = Math.abs(destino.row - this.position.row);
        const diferenciaColumna = Math.abs(destino.column - this.position.column);

        // El rey se mueve una casilla en cualquier dirección
        return diferenciaFila <= 1 && diferenciaColumna <= 1;
    }

    //GETERS Y SETERS

}