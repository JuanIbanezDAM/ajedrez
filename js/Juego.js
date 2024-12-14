
export default class Juego {
    constructor(jugador1, jugador2, tablero) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.tablero = tablero;
        this.turno = jugador1; // El jugador 1 comienza
    }

    iniciar() {
        // Colocar las piezas iniciales de ambos jugadores en el tablero
        this.jugador1.crearPiezas();
        this.jugador2.crearPiezas();

        this.tablero.colocarPiezas(this.jugador1.piezas);
        this.tablero.colocarPiezas(this.jugador2.piezas);

        // Mostrar el tablero inicial
        this.tablero.mostrarTablero();
    }

    manejarClickEnCelda(row, column) {
        const piezaEnCelda = this.tablero.tablero[row][column];

        if (piezaEnCelda) {
            if (piezaEnCelda.color !== this.turno.color) {
                console.log("No puedes mover una pieza del oponente.");
                return false;
            }

            console.log(`Seleccionaste la pieza: ${piezaEnCelda.constructor.name}`);
            this.tablero.selectedPiece = piezaEnCelda;
        } else if (this.tablero.selectedPiece) {
            const destino = { row, column };
            const pieza = this.tablero.selectedPiece;

            // Validar movimiento antes de mover
            if (!pieza.esMovimientoValido(destino, this.tablero.tablero)) {
                console.log("Movimiento inválido según las reglas de esta pieza.");
                return false;
            }

            // Si el movimiento es válido, mover la pieza
            this.tablero.moverPieza(pieza, destino);
            console.log(`Pieza movida a: ${row}, ${column}`);
            this.cambiarTurno(); // Cambiar turno solo si el movimiento fue válido
            this.tablero.selectedPiece = null;
        } else {
            console.log("No hay pieza seleccionada.");
        }

        this.tablero.mostrarTablero();
    }


    cambiarTurno() {
        this.turno = this.turno === this.jugador1 ? this.jugador2 : this.jugador1;
        console.log(`Turno de: ${this.turno.nombre}`);
        document.getElementById('resultado-turno').innerHTML = `Turno de ${this.turno.color}: ${this.turno.nombre}`;

    }


}