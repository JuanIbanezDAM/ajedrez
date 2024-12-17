import Tablero from './js/Tablero.js';
import Jugador from './js/Jugador.js';
import Juego from './js/Juego.js';

import Torre from './js/clases/Torre.js';
import Caballo from './js/clases/Caballo.js';
import Alfil from './js/clases/Alfil.js';
import Reina from './js/clases/Reina.js';
import Rey from './js/clases/Rey.js';
import Peon from './js/clases/Peon.js';


// Crear los jugadores
const jugador1 = new Jugador("Alice", "blanco", "./assets/img/avatar-blanco.jpg");
const jugador2 = new Jugador("Bob", "negro", "./assets/img/avatar-negro.jpg");


// Crear el juego
const juego = new Juego(jugador1, jugador2);

// Crear el tablero y asociarlo al juego
const tablero = new Tablero(juego);
juego.tablero = tablero;

// Inicializar el juego
juego.iniciar();
//Prueba de fichas sueltas para ver si estan todas ok



 
/* 
// Clases pieza para podr instanciar clses alatorias
const clasesPiezas = {
    Rey: Rey,
    Reina: Reina,
    Peon: Peon,
    Alfil: Alfil,
    Caballo: Caballo,
    Torre: Torre
};

//Movimineots aleatorios
function moverPieza() {
    const arrPiezas = ["Rey", "Reina", "Peon", "Alfil", "Caballo", "Torre"];
    const arrColores = ["negro", "blanco"];

    // Seleccionar aleatoriamente pieza, color y posición
    const fila = Math.floor(Math.random() * 8);
    const columna = Math.floor(Math.random() * 8);
    const tipo = Math.floor(Math.random() * arrPiezas.length);
    const color = arrColores[Math.floor(Math.random() * arrColores.length)];

    // Crear la pieza dinamicamente
    const ClasePieza = clasesPiezas[arrPiezas[tipo]];
    const piezaPrueba = new ClasePieza(color, { row: fila, column: columna });

    tablero.colocarPieza(piezaPrueba, piezaPrueba.position);
    tablero.mostrarTablero();

    // Eliminar la pieza despues de 2 segundos
    setTimeout(() => {
        tablero.eliminarPieza(piezaPrueba, piezaPrueba.position);
        tablero.mostrarTablero();
    }, 2000);

    setTimeout(moverPieza, 2000);
}

// Iniciar el bucle infinito
moverPieza(); 
 */




