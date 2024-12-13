
export default class Tablero {
    //ATRIBUTOS
    /* 
    tablero [][]
    */

    //CONSTRUCTOR
    constructor() {
        this.tablero = Array(8).fill(null).map(() => Array(8).fill(null));
    }
    //GETERS Y SETERS


    //METODOS
    //Crear el tablero
    mostrarTablero() {
        //Limpiamos el tablero
        const tableroContainer = document.getElementById('tablero-container');
        tableroContainer.innerHTML = '';

        //Recorrer filas y columnas
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero.length; j++) {

                //Crear elementos celda y mostrarlos en el DOM
                const cell = document.createElement('div');
                cell.classList.add('celda', (i + j) % 2 === 0 ? 'white' : 'black');
                cell.dataset.position = `${i},${j}`;
                tableroContainer.appendChild(cell);

                // Si hay una pieza en esta celda, dibujarla
                if (this.tablero[i][j]) {
                    const piezaImg = document.createElement('img');
                    piezaImg.src = this.tablero[i][j].img;
                    piezaImg.alt = `${this.tablero[i][j].constructor.name} ${this.tablero[i][j].color}`;
                    cell.appendChild(piezaImg);
                }
            }
        }
    }

    // Colocar una pieza en el tablero
    colocarPieza(pieza, position) {
        this.tablero[position.row][position.column] = pieza;
    }
    colocarPiezas(piezas) {
        piezas.forEach(pieza => {
            this.colocarPieza(pieza, pieza.position);
        });
    }
    eliminarPieza(pieza, position){
        this.tablero[position.row][position.column] = null;
    }
    


}