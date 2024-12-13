export default class Pieza {
    //ATRIBUTOS
    /* 
    color
    position {row, column}
    onGame
    img
    moves [position]
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

    //METODOS
    //Devolver la letra correspondiente a la columna del tablero
    columnToLetter() {
        return Pieza.arrLetters[this.position.column - 1];
    }

    toString() {
        return `${this.constructor.name} (${this.color}) en ${this.position.row}${this.columnToLetter()} img ${this.img}`;
    }

    move() {
        this.moves = this.moves.push(this.position);
    }

    //GETERS Y SETERS

    getImg(color) {
        const basePath = './assets/piezas/';
        const fileName = `${this.constructor.name}_${this.color}.svg`; // Ejemplo: "rey_blanco.svg"
        return `${basePath}${fileName}`;
    }
}