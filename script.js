import Tablero from './js/Tablero.js';
import Jugador from './js/Jugador.js';
import Juego from './js/Juego.js';

// Crear los jugadores
const jugador1 = new Jugador("Marisa", "blanco", "./assets/img/avatar-blanco.jpg");
const jugador2 = new Jugador("Luisa", "negro", "./assets/img/avatar-negro.jpg");

// Crear el juego
const juego = new Juego(jugador1, jugador2);

// Crear el tablero y asociarlo al juego
const tablero = new Tablero(juego);
juego.tablero = tablero;

// Inicializar el juego
juego.iniciar();
