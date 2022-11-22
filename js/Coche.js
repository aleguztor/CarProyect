// Posicion del coche esta siempre en f9_c6
var coche = document.getElementById("coche");
var cuerpo = document.querySelector("body");

var nieblas= document.getElementById(`niebla f${fil}_c${col}`)
var dentroMap=0;
var dentroMaphorizonal=6;
var nieblaActual=114;

niebla(nieblaActual);


cuerpo.addEventListener("keydown", function () {
   
  document.onkeydown = movimiento();

});

//MOVIMIENTO DEL COCHE EN EL TABLERO CON AVISOS
function movimiento(e) {
    
  e = e || window.event;

  var nieblas2= document.querySelectorAll(".niebla");
  var cocheelegido = document.getElementById("coche");

  var casillaAnterior = document.querySelector(`#f${fil}_c${col}`);
  var casillaDetras = document.querySelector(`#f${fil + 1}_c${col}`);
  var casillaSiguiente = document.querySelector(`#f${fil - 1}_c${col}`);
  var casillaDerecha = document.querySelector(`#f${fil}_c${col + 1}`);
  var casillaIzquierda = document.querySelector(`#f${fil}_c${col - 1}`);

  try{
  
    if (e.keyCode == "87") {
      //ARRIBA

      if (casillaSiguiente.classList.contains("acantilado")) {
        alert("No puedes avanzar! Hay un acantilado!");
      } else if (casillaSiguiente.classList.contains("montaña")) {
        alert("No puedes avanzar! Hay una montaña!");
      } else {
      
        casillaAnterior.removeChild(cocheelegido);
      //  casillaAnterior.children.namedItem("div").setAttribute("id",);
        nieblaActual=nieblaActual-12;
        niebla(nieblaActual);
        --fil;
      
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
      }
      ganaste(fil,col);
    } else if (e.keyCode == "83") {
      //ABAJO

      if (casillaDetras.classList.contains("acantilado")) {
        alert("No puedes avanzar! Hay un acantilado!");
      } else if (casillaDetras.classList.contains("montaña")) {
        alert("No puedes avanzar! Hay una montaña!");
      } else {
        casillaAnterior.removeChild(cocheelegido);
        nieblaActual=nieblaActual+12;
        niebla(nieblaActual);
        ++fil;
        
        
    
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
      }
      ganaste(fil,col);

    } else if (e.keyCode == "65") {
      //IZQUIERDA
      if (casillaIzquierda.classList.contains("acantilado")) {
        alert("No puedes avanzar! Hay un acantilado!");
      } else if (casillaIzquierda.classList.contains("montaña")) {
        alert("No puedes avanzar! Hay una montaña!");
      } else {
        casillaAnterior.removeChild(cocheelegido);
        nieblaActual=nieblaActual-1;
        niebla(nieblaActual);
        --col;
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
     
      }

      ganaste(fil,col);

    } else if (e.keyCode == "68") {
      //DERECHA
      if (casillaDerecha.classList.contains("acantilado")) {
        alert("No puedes avanzar! Hay un acantilado!");
      } else if (casillaDerecha.classList.contains("montaña")) {
        alert("No puedes avanzar! Hay una montaña!");
      } else {
        casillaAnterior.removeChild(cocheelegido);
        // casillaAnterior.removeChild(niebla);
        nieblaActual=nieblaActual+1;
        niebla(nieblaActual);
        ++col;
        
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
      }

      ganaste(fil,col);

    }
 
  }catch(error){
    alert("Limite de mapa");
  }
  volverNiebla(nieblaActual,e);
  if(fil==0 && col==9){
    window.location = "../Mapa2.html";
  }
}





function ganaste(fil,col){
  if (
    document.querySelector(`#f${fil}_c${col}`).classList.contains("win")
  ) {
    alert("Ganaste!!");
    location.reload();
  }
}




// obj = document.getElementById('tablero');

function niebla(nieblaACtual){

var pos=0;


  var nieblaArriba=nieblaACtual-12;
  var nieblaAbajo=nieblaACtual+12;
  var nieblaDerecha=nieblaACtual+1;
  var nieblaIzquierda=nieblaACtual-1;

  
  posicionActual = document.getElementsByClassName('niebla')[nieblaACtual].setAttribute("id","noniebla");

  if(dentroMap<8){
  posicionArriba = document.getElementsByClassName('niebla')[nieblaArriba].setAttribute("id","noniebla");
  }

if(dentroMap>=1){

posicionAbajo = document.getElementsByClassName('niebla')[nieblaAbajo].setAttribute("id","noniebla");
}
if(dentroMaphorizonal<=10){
  posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");

}
if(dentroMaphorizonal>1){
posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");
}

  // if(dentroMap>=0 && dentroMaphorizonal==11){
  //   posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");

  // }else{
    
  //   if(dentroMaphorizonal==11){
  //     posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");
  //   }else{
  //     posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");
  //     
  //   }
  // }
 
  





}
function volverNiebla(posicion,e){
  e = e || window.event;
 
  if(e.keyCode == "87"){ //arriba

    if(dentroMap>=1 ){
      
      posicionArriba = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");
      posicionAbajo = document.getElementsByClassName('niebla')[posicion+13].setAttribute("id","niebla");
      posicionAbajoabajo = document.getElementsByClassName('niebla')[posicion+24].setAttribute("id","niebla");
      if(dentroMap>=0 && dentroMap<=8){

        ++dentroMap;
      
      }
      
    }else{
      
      posicionArriba = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");
      posicionAbajo = document.getElementsByClassName('niebla')[posicion+13].setAttribute("id","niebla");
      ++dentroMap;
      
    }
    console.log("VERTICAL: "+dentroMap)
  }else if(e.keyCode == "83"){

    
   
    if(dentroMap>0){
      --dentroMap;
      
     
      }
      console.log("VERTICAL: "+dentroMap)
      
      
      
        posicionDerecha = document.getElementsByClassName('niebla')[posicion-11].setAttribute("id","niebla");
        posicionIzquierda = document.getElementsByClassName('niebla')[posicion-13].setAttribute("id","niebla");
        posicionAbajoabajo = document.getElementsByClassName('niebla')[posicion-24].setAttribute("id","niebla");

      
     

  }else if(e.keyCode == "68"){

   if(dentroMaphorizonal>=10){
    posicionDerecha =document.getElementsByClassName('niebla')[posicion+1].setAttribute("id","niebla");

   }
   if(dentroMap==0){
    posicionIzquierda = document.getElementsByClassName('niebla')[posicion-2].setAttribute("id","niebla");
    posicionIzquierda=document.getElementsByClassName('niebla')[posicion -13].setAttribute("id","niebla");
   }else{
    posicionIzquierda = document.getElementsByClassName('niebla')[posicion-2].setAttribute("id","niebla");
    posicionDerecha = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");
    posicionIzquierda =  document.getElementsByClassName('niebla')[posicion -13].setAttribute("id","niebla");
   }

      // console.log(posicionHorizontal)
      if(dentroMaphorizonal<11){
      ++dentroMaphorizonal;
    }
      console.log("HORIZONTAL: "+dentroMaphorizonal);

      
      
      

  }else if(e.keyCode == "65"){

    
     
      posicionDerecha = document.getElementsByClassName('niebla')[posicion+2].setAttribute("id","niebla");
      posicionArriba = document.getElementsByClassName('niebla')[posicion-11].setAttribute("id","niebla");
      posicionAbajo =  document.getElementsByClassName('niebla')[posicion +13].setAttribute("id","niebla");
      if(dentroMaphorizonal>0){

        --dentroMaphorizonal;
       
      }
   
      console.log("HORIZONTAL: "+dentroMaphorizonal);

      
}
}