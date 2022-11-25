
//PINTAMOS EL TAMAÑO DEL TABLERO


pintarTablero(maxfila,maxColumna);
getMapRandom(url,maxfila, maxColumna);

//WIN PLACE
var win = document.getElementById("f8_c10");
win.classList.remove("casilla");
win.classList.add("win");




//Start Coche

var fil=1;
var col=1;
var pintado = document.querySelector(`#f${fil}_c${col}`);

var coche=document.createElement("div");
coche.setAttribute("id","coche");

pintado.appendChild(coche);





async function getMapRandom(url,numFilas, numColumnas){
    const response = await fetch(url);
    var data = await response.json();
        
   

    for(let f=0; f<numFilas; f++){
        for(let c=0; c<numColumnas; c++){

            //ACANTILADOS
            if(data[f][c]==1){
                var acantilado= document.getElementById(`f${f}_c${c}`);
                acantilado.classList.add("acantilado");
            }

            //MONTAÑAS
            if(data[f][c]==2){
                var acantilado= document.getElementById(`f${f}_c${c}`);
                acantilado.classList.add("montaña");
            }
        }
    }

    // console.log(data);
    
}