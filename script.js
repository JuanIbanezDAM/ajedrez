import Tablero from './js/Tablero.js';
import Jugador from './js/Jugador.js';

import Torre from './js/clases/Torre.js';
import Caballo from './js/clases/Caballo.js';
import Alfil from './js/clases/Alfil.js';
import Reina from './js/clases/Reina.js';
import Rey from './js/clases/Rey.js';
import Peon from './js/clases/Peon.js';

// Crear un tablero
let tablero = new Tablero();

// Crear un peón blanco
let jugadador1 = new Jugador("Juan", "negro");
let jugadador2 = new Jugador("Luisa", "blanco");

//jugadador1.crearPiezas();
//jugadador2.crearPiezas();

//Prueba de fichas sueltas para ver si estan todas ok


// Colocar el peón en el tablero (en la posición [1, 1])


// Mostrar el tablero con el peón
tablero.mostrarTablero();


const clasesPiezas = {
    Rey: Rey,
    Reina: Reina,
    Peon: Peon,
    Alfil: Alfil,
    Caballo: Caballo,
    Torre: Torre
};

//Movimineots aleatorios carga
function moverPieza() {
    const arrPiezas = ["Rey", "Reina", "Peon", "Alfil", "Caballo", "Torre"];
    const arrColores = ["negro", "blanco"];

    // Seleccionar aleatoriamente pieza, color y posición
    const fila = Math.floor(Math.random() * 8);
    const columna = Math.floor(Math.random() * 8);
    const tipo = Math.floor(Math.random() * arrPiezas.length);
    const color = arrColores[Math.floor(Math.random() * arrColores.length)];

    // Crear la pieza dinámicamente
    const ClasePieza = clasesPiezas[arrPiezas[tipo]];
    const piezaPrueba = new ClasePieza(color, { row: fila, column: columna });

    tablero.colocarPieza(piezaPrueba, piezaPrueba.position);
    tablero.mostrarTablero();

    // Eliminar la pieza después de 2 segundos
    setTimeout(() => {
        tablero.eliminarPieza(piezaPrueba, piezaPrueba.position);
        tablero.mostrarTablero();
    }, 2000);

    setTimeout(moverPieza, 2000);
}

// Iniciar el bucle infinito
moverPieza();



