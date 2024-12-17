
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

        this._mostrarJugador(this.jugador1, "jugador-blanco");
        this._mostrarJugador(this.jugador2, "jugador-negro");

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

        // Comer una pieza enemiga

        if (piezaEnCelda && piezaEnCelda.color !== this.turno.color) {
            this._comerPieza(piezaEnCelda, destino);
        } else if (!piezaEnCelda) {
            this._moverPieza(destino);
        }
        this.tablero.selectedPiece = null; // Deselecionar la pieza

    }

    _comerPieza(piezaEnCelda, destino) {
        const origen = this.tablero.selectedPiece.position;

        if (this.tablero.comerPieza(origen, destino, this.turno)) {
            console.log(`Pieza comida: ${piezaEnCelda.constructor.name}`);

            // Comprobar si la pieza comida es un Rey
            if (piezaEnCelda.constructor.name === "Rey") {
                console.log(`¡El rey de ${piezaEnCelda.color} ha sido capturado!`);
                console.log(`¡${this.turno.nombre} gana la partida!`);
                this._terminarJuego(); // Finaliza la partida
                return; // Salir del método para evitar más acciones
            }

            this.cambiarTurno(); // Cambiar turno solo si no se termina el juego
        } else {
            console.log("No se pudo comer la pieza.");
        }
    }

    _moverPieza(destino) {
        if (this.tablero.moverPieza(this.tablero.selectedPiece, destino)) {
            console.log(`Pieza movida a: ${destino.row}, ${destino.column}`);
            this.cambiarTurno();
        } else {
            console.log("Movimiento inválido.");
        }

    }

    _mostrarJugador(jugador, contenedorId) {
        const contenedor = document.getElementById(contenedorId);

        // Actualizar nombre
        const nombreElem = contenedor.querySelector(".nombre");
        nombreElem.textContent = jugador.nombre;

        // Actualizar avatar
        const avatarElem = contenedor.querySelector(".avatar");
        avatarElem.src = jugador.avatar;
        avatarElem.alt = `Avatar de ${jugador.nombre}`;
    }

    _terminarJuego() {
        console.log("Fin de la partida.");
        // Puedes mostrar un mensaje al jugador
        alert(`¡Fin del juego! ${this.turno.nombre} gana.`);
        this.tablero.desactivarTablero(); // Opcional: Bloquear el tablero
    }
}