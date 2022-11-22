
//PINTAMOS EL TAMAÑO DEL TABLERO

let maxfila=10;
let maxColumna=12;

pintarTablero(maxfila,maxColumna);


//WIN PLACE
var win = document.getElementById("f0_c11");
win.classList.remove("casilla");
win.classList.add("win");

//ACANTILADOS

var acantilado= document.getElementById("f0_c3");
var acantilado2= document.getElementById("f1_c3");
var acantilado3= document.getElementById("f0_c4");
var acantilado4= document.getElementById("f3_c1");
var acantilado5= document.getElementById("f5_c2");
var acantilado6= document.getElementById("f0_c6");

acantilado.classList.add("acantilado");
acantilado2.classList.add("acantilado");
acantilado3.classList.add("acantilado");
acantilado4.classList.add("acantilado");
acantilado5.classList.add("acantilado");
acantilado6.classList.add("acantilado");

//MONTAÑAS
var acantilado= document.getElementById("f2_c5");
var acantilado2= document.getElementById("f2_c6");
var acantilado3= document.getElementById("f2_c7");
var acantilado4= document.getElementById("f2_c8");
var acantilado5= document.getElementById("f2_c9");

acantilado.classList.add("montaña");
acantilado2.classList.add("montaña");
acantilado3.classList.add("montaña");
acantilado4.classList.add("montaña");
acantilado5.classList.add("montaña");

//Start Coche

var fil=9;
var col=0;
var pintado = document.querySelector(`#f${fil}_c${col}`);

var coche=document.createElement("div");
coche.setAttribute("id","coche");

pintado.appendChild(coche);


///NIEBLA

