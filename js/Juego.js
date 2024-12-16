
export default class Juego {
    //ATRIBUTO
    /*     
    jugador1    : Jugador
    jugador2    : Jugador
    tablero     : Tablero
    turno       : Jugador
    */

    //CONSTRUCTOR
    constructor(jugador1, jugador2, tablero) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.tablero = tablero;
        this.turno = jugador1; // El jugador 1 comienza
    }

    //GETERS Y SETERS

    //METODOS
    // Crear y colocar las piezas iniciales de ambos jugadores en el tablero
    iniciar() {

        this.jugador1.crearPiezas();
        this.jugador2.crearPiezas();

        this.tablero.colocarPiezas(this.jugador1.piezas);
        this.tablero.colocarPiezas(this.jugador2.piezas);

        // Mostrar el tablero inicial
        this.tablero.mostrarTablero();
    }

    // Funcion para cambiar el turno
    cambiarTurno() {
        this.turno = this.turno === this.jugador1 ? this.jugador2 : this.jugador1;
        console.log(`Turno de: ${this.turno.nombre}`);
        //document.getElementById('resultado-turno').innerHTML = `Turno de ${this.turno.color}: ${this.turno.nombre}`;

    }

    // Funcion para manejar y validar los click
    manejarClickEnCelda(row, column) {
        const destino = { row, column };
        const piezaEnCelda = this.tablero.tablero[row][column];

        if (this.tablero.selectedPiece) {
            this._procesarMovimiento(piezaEnCelda, destino);
        } else if (piezaEnCelda && piezaEnCelda.color === this.turno.color) {
            this._seleccionarPieza(piezaEnCelda, row, column);
        } else {
            console.log("Selecciona una pieza válida.");
        }

        this.tablero.mostrarTablero(); // Actualizar visualizacion
    }

    // Funcion para selecionar una pieza del tablero de juego
    _seleccionarPieza(pieza, row, column) {
        console.log(`Seleccionaste la pieza: ${pieza.constructor.name} en ${row}, ${column}`);
        this.tablero.selectedPiece = pieza;
    }

    // Funcion para comer o comer una pieza del tablero de juego
    _procesarMovimiento(piezaEnCelda, destino) {
        const origen = this.tablero.selectedPiece.position;

        // Comer una pieza enemiga
        if (piezaEnCelda && piezaEnCelda.color !== this.turno.color) {
            if (this.tablero.comerPieza(origen, destino)) {
                console.log(`Pieza comida: ${piezaEnCelda.constructor.name}`);
                this.cambiarTurno();
            } else {
                console.log("No se pudo comer la pieza.");
            }
        }
        // Mover la pieza finalmente al destino
        else if (!piezaEnCelda) {
            if (this.tablero.moverPieza(this.tablero.selectedPiece, destino)) {
                console.log(`Pieza movida a: ${destino.row}, ${destino.column}`);
                this.cambiarTurno();
            } else {
                console.log("Movimiento inválido.");
            }
        }

        this.tablero.selectedPiece = null; // Deselecionar la pieza
    }
}