// Posicion del coche esta siempre en f9_c6
var coche = document.getElementById("coche");
var cuerpo = document.querySelector("body");

var nieblas= document.getElementById(`niebla f${fil}_c${col}`)

var  score=0;



startContador();

// console.log(score);



function startContador(){ 
  setInterval(() => {
    var textoScore = ` 
    <div id="puntuacionDiv">
    <h2> TIME : ${score} </h2>
    </div>`;
    cuerpo.innerHTML+=textoScore;
    setTimeout(function(){
      document.getElementById("puntuacionDiv").remove();
  }, 1000);
   
    ++score
  }, 1000)
  
}




// DE 1 AL mAX DATOS INTOCABLES
var dentroMap=9;
var dentroMaphorizonal=2;
var nieblaActual=13;

var textomontana=` 
      <div id="avisomontana">
      CUIDADO!<br> Montaña, no puedes pasar! <br>GANAS: 2s
      </div>`;
var textoacantilado=` 
      <div id="avisoacantilado">
      CUIDADO!<br> Acantilado! Te caiste! <br>GANAS: 3s
      </div>`;
var textoWin=` 
<div id="avisoacantilado"> GANASTE
</div>`;

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

  // try{
  
    if (e.keyCode == "87") {
      //ARRIBA
      
    

      var casillaaabajoarriba = document.querySelector(`#f${fil+9}_c${col}`);
      
      if(dentroMap==10){
        if (casillaaabajoarriba.classList.contains("acantilado")) {
          ponerTextoAvantilado()
          score=score+3;
        } else if (casillaaabajoarriba.classList.contains("montaña")) {
          ponerTextoMontana();
          score=score+2;
          
        }else{
          dentroMap=1;
          casillaAnterior.removeChild(cocheelegido);
          nieblaActual=nieblaActual+108;
          niebla(nieblaActual);
          fil=9;
          var nuevo = document.querySelector(`#f${fil}_c${col}`);
          nuevo.appendChild(coche);
          }
        }
      if (casillaSiguiente.classList.contains("acantilado")) {
        ponerTextoAvantilado();
        score=score+3;
      } else if (casillaSiguiente.classList.contains("montaña")) {
        ponerTextoMontana();
        score=score+2;
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
      var casillaaabajoarriba = document.querySelector(`#f${fil-9}_c${col}`);
      
      if(dentroMap==1){
        if (casillaaabajoarriba.classList.contains("acantilado")) {
          ponerTextoAvantilado()
          score=score+3;
        } else if (casillaaabajoarriba.classList.contains("montaña")) {
          ponerTextoMontana()
          score=score+2;
        }else{
        dentroMap=10;
        casillaAnterior.removeChild(cocheelegido);
        nieblaActual=nieblaActual-108;
        niebla(nieblaActual);
        fil=0;
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
        }
      }

      if (casillaDetras.classList.contains("acantilado")) {
        ponerTextoAvantilado()
        score=score+3;
      } else if (casillaDetras.classList.contains("montaña")) {
        ponerTextoMontana()
        score=score+2;
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

      if(dentroMaphorizonal==1){
        var casillaaIzquierdaderecha = document.querySelector(`#f${fil}_c${col+11}`);
    
          if (casillaaIzquierdaderecha.classList.contains("acantilado")) {
            ponerTextoAvantilado()
            score=score+3;
          } else if (casillaaIzquierdaderecha.classList.contains("montaña")) {
            ponerTextoMontana()
            score=score+2;
          }else{
        
        dentroMaphorizonal=12;
        casillaAnterior.removeChild(cocheelegido);
        nieblaActual=nieblaActual+11;
        niebla(nieblaActual);
        col=11;
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
          }
      }else{
        if (casillaIzquierda.classList.contains("acantilado")) {
          ponerTextoAvantilado()
          score=score+3;
        } else if (casillaIzquierda.classList.contains("montaña")) {
          ponerTextoMontana()
          score=score+2;
        }else{
          --dentroMaphorizonal;
          casillaAnterior.removeChild(cocheelegido);
          nieblaActual=nieblaActual-1;
          niebla(nieblaActual);
         
          --col;
          var nuevo = document.querySelector(`#f${fil}_c${col}`);
          nuevo.appendChild(coche);
        }
        
        
       
      }

     
      

      ganaste(fil,col);

    } else if (e.keyCode == "68") {
      //DERECHA

      if(dentroMaphorizonal==12){
        var casillaaderechaIzquierda = document.querySelector(`#f${fil}_c${col-11}`);
    
          if (casillaaderechaIzquierda.classList.contains("acantilado")) {
            ponerTextoAvantilado()
            score=score+3;
          } else if (casillaaderechaIzquierda.classList.contains("montaña")) {
            ponerTextoMontana()
            score=score+2;
          }else{
        dentroMaphorizonal=1;
        casillaAnterior.removeChild(cocheelegido);
        nieblaActual=nieblaActual-11;
        niebla(nieblaActual);
        col=0;
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
          }
      }else{
      if (casillaDerecha.classList.contains("acantilado")) {
        ponerTextoAvantilado()
        score=score+3;
      } else if (casillaDerecha.classList.contains("montaña")) {
        ponerTextoMontana()
        çscore=score+2;
      } else {
      
        ++dentroMaphorizonal;
        casillaAnterior.removeChild(cocheelegido);
        nieblaActual=nieblaActual+1;
        niebla(nieblaActual);

        ++col;
       
        var nuevo = document.querySelector(`#f${fil}_c${col}`);
        nuevo.appendChild(coche);
      }
    }
      ganaste(fil,col);
      // console.log("Vertical: "+dentroMap+" Horizontal: "+dentroMaphorizonal);
    }
 
  // SI QUIERES NIEBLA SOLO TIENES QUE PONER ESTA FUNCION DISPONIBLE
  // FALTA IMPLEMENTAR QUITAR NIEBLA CUANDO PASA DE MAPA
  // volverNiebla(nieblaActual,e); 
 
}





function ganaste(fil,col){
  if (
    document.querySelector(`#f${fil}_c${col}`).classList.contains("win")
  ) {
    var audioGanaste = new Audio('../Sounds/462250__silverillusionist__victory-sound-1.wav');
    audioGanaste.volume=0.6;
    audioGanaste.play();
    ponerTextoWin();
   
    setTimeout(function(){
      location.reload();
  }, 2200);
    
  }
}






function niebla(nieblaACtual){

var pos=0;


  var nieblaArriba=nieblaACtual-12;
  var nieblaAbajo=nieblaACtual+12;
  var nieblaDerecha=nieblaACtual+1;
  var nieblaIzquierda=nieblaACtual-1;

  // console.log("Vertical: "+dentroMap+" Horizontal: "+dentroMaphorizonal);


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

function ponerTextoMontana(){

  cuerpo.innerHTML+=textomontana;
  var audioMontana = new Audio('../Sounds/RockSound.wav');
  audioMontana.volume=0.3;
  audioMontana.play();
  setTimeout(function(){
    document.getElementById("avisomontana").remove();
}, 800);

}

function ponerTextoAvantilado(){
  var audioAcantilado =  new Audio('../Sounds/HillFall.wav');
  cuerpo.innerHTML+=textoacantilado;
  audioAcantilado.volume=0.7;
  audioAcantilado.play();
  setTimeout(function(){
    document.getElementById("avisoacantilado").remove();
}, 800);

}
function ponerTextoWin(){

  cuerpo.innerHTML+=textoWin;
  setTimeout(function(){
    document.getElementById("textoWin").remove();
}, 1500);
}