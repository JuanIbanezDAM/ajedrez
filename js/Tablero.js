
export default class Tablero {
    //ATRIBUTOS
    /* 
    tablero : Celda[8][8]  
    juego   : Juego
    selectedPiece   : boolean
    */

    //CONSTRUCTOR
    constructor(juego) {
        this.tablero = Array(8).fill(null).map(() => Array(8).fill(null));
        this.juego = juego; // Referencia al juego
        this.selectedPiece = null;
    }

    //GETERS Y SETERS

    //METODOS
    //Crear el tablero
    mostrarTablero() {
        const tableroContainer = document.getElementById('tablero-container');
        tableroContainer.innerHTML = '';

        for (let i = 0; i < this.tablero.length; i++) { // Filas
            for (let j = 0; j < this.tablero.length; j++) { // Columnas
                const cell = document.createElement('div');
                cell.classList.add('celda', (i + j) % 2 === 0 ? 'white' : 'black'); // Crear elemento celda para añadir al DOM
                cell.dataset.row = i;
                cell.dataset.column = j;

                // Agregar resaltado si esta celda tiene la pieza seleccionada
                if (this.selectedPiece &&
                    this.selectedPiece.position.row === i &&
                    this.selectedPiece.position.column === j) {
                    cell.classList.add('seleccionada'); // Añadir una clase personalizada a un elemento del DOM
                }

                // Añadir img de la pieza si se encuentra en alguna casilla del tablero
                if (this.tablero[i][j]) {
                    const pieza = this.tablero[i][j];
                    const piezaImg = document.createElement('img');
                    piezaImg.src = pieza.img;
                    piezaImg.alt = `${pieza.constructor.name} ${pieza.color}`;
                    cell.appendChild(piezaImg);
                }

                // Manejar los clics en el tablero
                // Los clicks se validan en manejarClickEnCelda de la clase Juego
                cell.addEventListener('click', () => {
                    this.juego.manejarClickEnCelda(i, j);
                });

                tableroContainer.appendChild(cell);
            }
        }
    }


    // Colocar una pieza en el tablero
    colocarPieza(pieza, position) {
        pieza.move();
        this.tablero[position.row][position.column] = pieza;
    }

    // Colocar una lista de piezas en el tablero
    colocarPiezas(piezas) {
        piezas.forEach(pieza => {
            this.colocarPieza(pieza, pieza.position);
        });
    }

    // Eliminar una pieza en el tablero
    eliminarPieza(pieza, position) {
        this.tablero[position.row][position.column] = null;
    }

    // Meidante colocarPieza y eliminarPieza, mueve una pieza del tablero
    moverPieza(pieza, destino) {
        // Validar que el destino este dentro del tablero
        if (
            destino.row < 0 || destino.row >= this.tablero.length ||
            destino.column < 0 || destino.column >= this.tablero[0].length
        ) {
            console.log("Movimiento fuera del tablero");
            return false;
        }

        // Mover la pieza
        this.eliminarPieza(pieza, pieza.position); // Eliminar de la posición actual
        this.colocarPieza(pieza, destino); // Colocar en el nuevo destino
        pieza.position = destino; // Actualizar la posición de la pieza
        return true;
    }

    // TODO Funcion para valdiar movimientos validos globales del tablero como pueda ser el movimiento que pone al rey en jaque
    esMovimientoPermitido(pieza, destino) {
        if (!pieza.esMovimientoValido(destino, this.tablero)) {
            return false;
        }

        // Validar otras condiciones globales, como si el movimiento pone al rey en jaque
        return true;
    }


}