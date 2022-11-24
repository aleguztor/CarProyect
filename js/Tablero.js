    var Tablero = document.getElementById("tablero");
    var cuerpo = document.querySelector("body");
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
// CREACION DE TABLERO 15 x 10 casillas


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

var avisomontana = document.createElement("div");
avisomontana.classList.add("avisomontana");
avisomontana.appendChild("CUIDADO!<br> Montaña, no puedes pasar! <br> +2s");
cuerpo.appendChild(avisomontana);
