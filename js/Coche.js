// Posicion del coche esta siempre en f9_c6
var coche = document.getElementById("coche");
var cuerpo = document.querySelector("body");

var nieblas= document.getElementById(`niebla f${fil}_c${col}`)
// DE 1 AL mAX
var dentroMap=1;
var dentroMaphorizonal=1;
var nieblaActual=108;

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
        ++dentroMap;
        casillaAnterior.removeChild(cocheelegido);
      
     
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
        --dentroMap;
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
        --dentroMaphorizonal;
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
       
      
        
        ++dentroMaphorizonal;
        casillaAnterior.removeChild(cocheelegido);
        nieblaActual=nieblaActual+1;
        niebla(nieblaActual);

        ++col;
       
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
      }

      ganaste(fil,col);
      console.log("Vertical: "+dentroMap+" Horizontal: "+dentroMaphorizonal);
    }
 
  }catch(error){
    alert("Limite de mapa");
  }
  volverNiebla(nieblaActual,e);
  if(fil==0 && col==11){
    // window.location = "../Mapa2.html";
    location.reload();
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






function niebla(nieblaACtual){

var pos=0;


  var nieblaArriba=nieblaACtual-12;
  var nieblaAbajo=nieblaACtual+12;
  var nieblaDerecha=nieblaACtual+1;
  var nieblaIzquierda=nieblaACtual-1;

  console.log("Vertical: "+dentroMap+" Horizontal: "+dentroMaphorizonal);


  posicionActual = document.getElementsByClassName('niebla')[nieblaACtual].setAttribute("id","noniebla");

  if(dentroMap==1 && dentroMaphorizonal<12 && dentroMaphorizonal!=1){
    posicionArriba = document.getElementsByClassName('niebla')[nieblaArriba].setAttribute("id","noniebla");
    posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");
    posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");
    
   // ESQUINA DERECHA ABAJO
  }else if(dentroMap==1 && dentroMaphorizonal==12){
    posicionArriba = document.getElementsByClassName('niebla')[nieblaArriba].setAttribute("id","noniebla");
    posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");

    //ESQUINA IZQUIEDA ABAJO
  }else if(dentroMap==1 && dentroMaphorizonal==1){
    posicionArriba = document.getElementsByClassName('niebla')[nieblaArriba].setAttribute("id","noniebla");
    posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");

    // TODO EL MEDIO
  }else if(dentroMap>1 && dentroMaphorizonal<12 && dentroMaphorizonal>1 && dentroMap<10){
    posicionArriba = document.getElementsByClassName('niebla')[nieblaArriba].setAttribute("id","noniebla");
    posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");
    posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");
    posicionAbajo = document.getElementsByClassName('niebla')[nieblaAbajo].setAttribute("id","noniebla");

  }else if(dentroMap>1 && dentroMaphorizonal==1 && dentroMap<10){
    posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");
    posicionAbajo = document.getElementsByClassName('niebla')[nieblaAbajo].setAttribute("id","noniebla");
    posicionArriba = document.getElementsByClassName('niebla')[nieblaArriba].setAttribute("id","noniebla");

    //ESQUINA IZQUIERDA ARRIBA
  }else if(dentroMap==10 && dentroMaphorizonal==1){
    posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");
    posicionAbajo = document.getElementsByClassName('niebla')[nieblaAbajo].setAttribute("id","noniebla");

  }else if(dentroMap>1 && dentroMap<10 && dentroMaphorizonal==12){
    posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");
    posicionArriba = document.getElementsByClassName('niebla')[nieblaArriba].setAttribute("id","noniebla");
    posicionAbajo = document.getElementsByClassName('niebla')[nieblaAbajo].setAttribute("id","noniebla");

 // ESQUINA DERECHA ARRIBA
  }else if(dentroMap==10 && dentroMaphorizonal==12){
    posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");
    posicionAbajo = document.getElementsByClassName('niebla')[nieblaAbajo].setAttribute("id","noniebla");


  }else if(dentroMap==10 && dentroMaphorizonal>1 && dentroMaphorizonal<12){

    posicionAbajo = document.getElementsByClassName('niebla')[nieblaAbajo].setAttribute("id","noniebla");
    posicionIzquierda = document.getElementsByClassName('niebla')[nieblaIzquierda].setAttribute("id","noniebla");
    posicionDerecha = document.getElementsByClassName('niebla')[nieblaDerecha].setAttribute("id","noniebla");

  }



}
function volverNiebla(posicion,e){
  e = e || window.event;
 
  if(e.keyCode == "87"){ //arriba
    if(dentroMap==2 && dentroMaphorizonal==12){
      posicionAbajoIZquierda = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");

    }else{
      posicionAbajoDerecha = document.getElementsByClassName('niebla')[posicion+13].setAttribute("id","niebla");
      posicionAbajoIZquierda = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");
      if(dentroMap>=3){
      posicionAbajo = document.getElementsByClassName('niebla')[posicion+24].setAttribute("id","niebla");
  
      }
    }
   

  }else if(e.keyCode == "83"){
    if(dentroMap==9 && dentroMaphorizonal==1){
      posicionAbajoIZquierda = document.getElementsByClassName('niebla')[posicion-11].setAttribute("id","niebla");

    }else{
      posicionAbajoDerecha = document.getElementsByClassName('niebla')[posicion-13].setAttribute("id","niebla");
      posicionAbajoIZquierda = document.getElementsByClassName('niebla')[posicion-11].setAttribute("id","niebla");
      
      if(dentroMap<=8){
      posicionAbajo = document.getElementsByClassName('niebla')[posicion-24].setAttribute("id","niebla");
      }
  
    }
   
      
     

  }else if(e.keyCode == "68"){
    if(dentroMap==10 && dentroMaphorizonal==2){
      posicionAbajo = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");

    }else{
      if(dentroMap==10){
        posicionIzquierda = document.getElementsByClassName('niebla')[posicion-2].setAttribute("id","niebla");
        posicionAbajo = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");

      }else{
        if(dentroMap>=2){
          posicionIzquierda = document.getElementsByClassName('niebla')[posicion-2].setAttribute("id","niebla");
          posicionAbajo = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");
          posicionArriba =  document.getElementsByClassName('niebla')[posicion -13].setAttribute("id","niebla");
        }else{
          posicionIzquierda = document.getElementsByClassName('niebla')[posicion-2].setAttribute("id","niebla");
          posicionArriba =  document.getElementsByClassName('niebla')[posicion -13].setAttribute("id","niebla");
        }
      }
      
    }
   
    
    
      
      
      

  }else if(e.keyCode == "65"){

    if(dentroMap>=2 && dentroMap<10){
      posicionDerecha = document.getElementsByClassName('niebla')[posicion+2].setAttribute("id","niebla");
      posicionArriba = document.getElementsByClassName('niebla')[posicion-11].setAttribute("id","niebla");
      posicionAbajo =  document.getElementsByClassName('niebla')[posicion +13].setAttribute("id","niebla");
     
    }else if(dentroMap==10){
      posicionAbajo =  document.getElementsByClassName('niebla')[posicion +13].setAttribute("id","niebla");
      posicionDerecha = document.getElementsByClassName('niebla')[posicion+2].setAttribute("id","niebla");

    }else{
      if(dentroMap==1 && dentroMaphorizonal==11){
        posicionArriba = document.getElementsByClassName('niebla')[posicion-11].setAttribute("id","niebla");

      }else{
        posicionDerecha = document.getElementsByClassName('niebla')[posicion+2].setAttribute("id","niebla");
        // posicionArriba = document.getElementsByClassName('niebla')[posicion+11].setAttribute("id","niebla");
        posicionArriba = document.getElementsByClassName('niebla')[posicion-11].setAttribute("id","niebla");
      }
     
    }
  

      
   
    

      
}
}