console.log("Starting ...");

var tela = document.querySelector("canvas.js");
var pincel = tela.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var cores = ["blue", "red", "green", "white", "black"];
var indiceCorAtual = 0;

function desenhaCirculo(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  pincel.fillStyle = cores[indiceCorAtual];
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);
  pincel.fill();

  console.log(x + "," + y);
}

tela.onclick = desenhaCirculo;

function mudaCor() {
  indiceCorAtual++;
  if (indiceCorAtual >= cores.length) {
    indiceCorAtual = 0;
  }
  return false;
}

tela.oncontextmenu = mudaCor;

var tela = document.querySelector("canvas.jscript");
var pincel = tela.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  console.log(x + "," + y);

  if (evento.shiftKey && evento.altKey) {
    alert("Só aperte uma tecla por vez, por favor!");
  } else if (evento.shiftKey && raio + 10 <= 40) {
    raio = raio + 10;
  } else if (evento.altKey && raio - 5 >= 10) {
    raio = raio - 5;
  }

  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

tela.onclick = desenhaCirculo;

var paleta = document.querySelector("input");
var tela = document.querySelector("canvas.desenhar");
var pincel = tela.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var desenha = false;

function desenhaCirculo(evento) {
  if (desenha) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = paleta.value;
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
  }

  console.log(x + "," + y);
}

tela.onmousemove = desenhaCirculo;

tela.onmousedown = function () {
  desenha = true;
};

tela.onmouseup = function () {
  desenha = false;
};

var tela = document.querySelector("canvas.alvo");
var pincel = tela.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}
desenhaCirculo(300, 200, raio + 20, "red");
desenhaCirculo(300, 200, raio + 10, "white");
desenhaCirculo(300, 200, raio, "red");

function dispara(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;
  if (x > 300 - raio && x < 300 + raio && y > 200 - raio && y < 200 + raio) {
    alert("Acertou no centro do alvo");
  }
}
tela.onclick = dispara;
