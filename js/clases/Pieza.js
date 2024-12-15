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
}