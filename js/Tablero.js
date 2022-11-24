    var Tablero = document.getElementById("tablero");
    var cuerpo = document.querySelector("body");
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

//VALORES DEL MAPA PREDEFINIDOS E INTOCABLES
    let maxfila=10;
    let maxColumna=12;
// CREACION DE TABLERO 15 x 10 casillas

    var url="http://localhost:8086/";
  
    
//SONIDO MUSICA:

var audioElement = new Audio('../Sounds/MusicComplete.mp3');
audioElement.volume=0.7;
audioElement.play();
audioElement.addEventListener('ended', function() {
    this.currentTime = 0;
    this.volume=0.5;
    this.play();
}, false);
    

function pintarTablero(numFilas, numColumnas){
    let tablero = document.querySelector("#tablero");
 
    document.querySelector("html").style.setProperty("--num-filas",numFilas);
    document.querySelector("html").style.setProperty("--num-columnas",numColumnas);
 
    for(let f=0; f<numFilas; f++){
        for(let c=0; c<numColumnas; c++){
           
            let newDiv = document.createElement("div");

            let nieblaDiv = document.createElement("div");
            nieblaDiv.classList.add("niebla");
            nieblaDiv.setAttribute("id","niebla f" + f + "_c" + c )
            newDiv.setAttribute("id","f" + f + "_c" + c );
           newDiv.setAttribute("class","casilla")
            newDiv.dataset.fila = f;
            newDiv.dataset.columna = c;
            tablero.appendChild(newDiv);
            
            newDiv.appendChild(nieblaDiv);
            
            
        }
    }
}


