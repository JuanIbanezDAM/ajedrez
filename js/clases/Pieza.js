export default class Pieza {
    //ATRIBUTOS
    /* 
    color   : String
    position : Object {row, column}
    onGame  : boolean
    img     : String
    moves : Object[position{row, column}]
    */
    static arrLetters = ["A", "B", "C", "D", "E", "F", "G", "H"]; // Atributo estatico, pertenece a la clase

    //CONSTRUCTOR
    constructor(color, position) {
        this.color = color;
        this.position = position;
        this.onGame = false;
        this.img = this.getImg();
        this.moves = [];
    }

    //GETERS Y SETERS
    getImg(color) {
        const basePath = './assets/piezas/';
        const fileName = `${this.constructor.name}_${this.color}.svg`; // Ejemplo: "rey_blanco.svg"
        return `${basePath}${fileName}`;
    }

    //METODOS
    //Devolver la letra correspondiente a la columna del tablero
    columnToLetter() {
        return Pieza.arrLetters[this.position.column - 1];
    }

    toString() {
        return `${this.constructor.name} (${this.color}) en ${this.position.row}${this.columnToLetter()} img ${this.img}`;
    }

    // Funcion que al mover un apieza almacena sus posiciones a lo largo del juego
    move() {
        //Guardamar su posicion 
        this.moves.push(this.position);
    }

    // Funcion para valdiar movimientos validos, cada pieza tiene sus reglas
    esMovimientoValido() {

    }

    // Funcion para valdiar caminos libres, usado por el alfil, torre y reina
    esCaminoLibre(destino, tablero) {
        const pasoFila = destino.row === this.position.row ? 0 : (destino.row > this.position.row ? 1 : -1);
        const pasoColumna = destino.column === this.position.column ? 0 : (destino.column > this.position.column ? 1 : -1);

        let fila = this.position.row + pasoFila;
        let columna = this.position.column + pasoColumna;

        while (fila !== destino.row || columna !== destino.column) {
            if (tablero[fila][columna]) {
                return false;
            }
            fila += pasoFila;
            columna += pasoColumna;
        }

        return true;
    }


    // Funcion para comer una pieza
    comerPieza(destino, tablero) {
        const piezaDestino = tablero[destino.row][destino.column];

        // Verificar si el destino tiene una pieza enemiga
        if (piezaDestino && piezaDestino.color !== this.color) {
            // Validar si el movimiento es valido para esta pieza
            if (this.esMovimientoValido(destino, tablero)) {
                tablero[destino.row][destino.column] = null; // Eliminar la pieza enemiga del tablero
                this.position = destino; // Actualizar la posición de la pieza actual
                return true; // La captura fue exitosa
            }
        }
        return false; // Captura no válida
    }

}