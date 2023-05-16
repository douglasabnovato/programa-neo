console.log("Starting ...");

var tela = document.querySelector("canvas.animation");
var pincel = tela.getContext("2d");

pincel.fillStyle = "gray";
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

pincelA.fillStyle = "lightgray";
pincelA.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
  pincelA.fillStyle = cor;
  pincelA.beginPath();
  pincelA.arc(x, y, raio, 0, 2 * Math.PI);
  pincelA.fill();
}

function limpaTela() {
  pincelA.clearRect(0, 0, 600, 400);
}
var raio = 22;
var fatorCrescimento = 0;

function atualizaTela() {
  limpaTela();
  if (raio > 60) {
    fatorCrescimento = -1;
  } else if (raio < 23) {
    fatorCrescimento = 1;
  }
  raio = raio + fatorCrescimento;
  desenhaCirculo(300, 200, raio, "blue");
}
setInterval(atualizaTela, 420);
