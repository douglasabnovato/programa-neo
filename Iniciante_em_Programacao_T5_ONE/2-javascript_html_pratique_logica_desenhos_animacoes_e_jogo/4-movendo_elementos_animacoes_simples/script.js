console.log("Starting ...");

var tela = document.querySelector("canvas.animation");
var pincel = tela.getContext("2d");

pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

var x = 20;
var sentido = 1;

function atualizaTela() {
  limpaTela();
  if (x > 600) {
    sentido = -1;
  } else if (x < 0) {
    sentido = 1;
  }

  desenhaCirculo(x, 20, 10);

  x = x + sentido;
}

setInterval(atualizaTela, 10);

var telaA = document.querySelector("canvas.pulsar");
var pincelA = telaA.getContext("2d");

pincelA.fillRect(0, 0, 600, 400);

function desenhaCirculoA(x, y, raio, cor) {
  pincelA.fillStyle = cor;
  pincelA.beginPath();
  pincelA.arc(x, y, raio, 0, 2 * Math.PI);
  pincelA.fill();
}

function limpaTelaA() {
  pincelA.clearRect(0, 0, 600, 400);
}
var raio = 22;
var fatorCrescimento = 0;

function atualizaTelaA() {
  limpaTelaA();
  if (raio > 60) {
    fatorCrescimento = -1;
  } else if (raio < 23) {
    fatorCrescimento = 1;
  }
  raio = raio + fatorCrescimento;
  desenhaCirculoA(300, 200, raio, "blue");
}

setInterval(atualizaTelaA, 70);

var telaB = document.querySelector("canvas.teclados");
var pincelB = telaB.getContext("2d");

pincelB.fillStyle = "lightgray";
pincelB.fillRect(0, 0, 600, 400);

var xB = 20;
var yB = 20;

// códigos do teclado
var esquerda = 37;
var cima = 38;
var direita = 39;
var baixo = 40;

var taxa = 10;

function desenhaCirculoB(xB, yB, raio) {
  pincelB.fillStyle = "blue";
  pincelB.beginPath();
  pincelB.arc(xB, yB, raio, 0, 2 * Math.PI);
  pincelB.fill();
}

function limpaTelaB() {
  pincelB.clearRect(0, 0, 600, 400);
}

function atualizaTelaB() {
  limpaTelaB();
  desenhaCirculoB(xB, yB, 10);
}

setInterval(atualizaTelaB, 20);

function leDoTeclado(evento) {
  if (evento.keyCode == cima) {
    yB = yB - taxa;
  } else if (evento.keyCode == baixo) {
    yB = yB + taxa;
  } else if (evento.keyCode == esquerda) {
    xB = xB - taxa;
  } else if (evento.keyCode == direita) {
    xB = xB + taxa;
  }
}

document.onkeydown = leDoTeclado;

function desenhaBandeiraBrasil() {
  var telaC = document.querySelector("canvas.bandeiraB");
  var pincelC = telaC.getContext("2d");

  pincelC.fillStyle = "green";
  pincelC.fillRect(0, 0, 600, 400);

  pincelC.fillStyle = "yellow";
  pincelC.beginPath();
  pincelC.moveTo(300, 50);
  pincelC.lineTo(50, 200);
  pincelC.lineTo(550, 200);
  pincelC.fill();

  pincelC.beginPath();
  pincelC.moveTo(50, 200);
  pincelC.lineTo(300, 350);
  pincelC.lineTo(550, 200);
  pincelC.fill();

  pincelC.fillStyle = "darkblue";
  pincelC.beginPath();

  pincelC.arc(300, 200, 100, 0, 2 * 3.14);
  pincelC.fill();
}

function desenhaBandeiraAlemanha() {
  var telaD = document.querySelector("canvas.bandeiraA");
  var pincelD = telaD.getContext("2d");

  pincelD.fillStyle = "black";
  pincelD.fillRect(0, 0, 600, 133);

  pincelD.fillStyle = "red";
  pincelD.fillRect(0, 133, 600, 133);

  pincelD.fillStyle = "yellow";
  pincelD.fillRect(0, 266, 600, 133);
}

desenhaBandeiraBrasil()
desenhaBandeiraAlemanha()
