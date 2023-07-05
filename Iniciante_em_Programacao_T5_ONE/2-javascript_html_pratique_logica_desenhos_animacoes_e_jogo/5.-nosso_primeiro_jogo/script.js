console.log("Starting Game ...");

var tela = document.querySelector("canvas.game");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

var raio = 10;
var xAleatorio;
var yAleatorio;

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {
  desenhaCirculo(x, y, raio + 20, "red");
  desenhaCirculo(x, y, raio + 10, "white");
  desenhaCirculo(x, y, raio, "red");
}

function sorteiaPosicao(maximo) {
  return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
  limpaTela();
  xAleatorio = sorteiaPosicao(600);
  yAleatorio = sorteiaPosicao(400);
  desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 1000);

function dispara(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  if (
    x > xAleatorio - raio &&
    x < xAleatorio + raio &&
    y > yAleatorio - raio &&
    y < yAleatorio + raio
  ) {
    alert("Acertou!");
  }
}

tela.onclick = dispara;

function desenhaQuadradoE(xE, yE, tamanhoE, corE) {
  pincelE.fillStyle = corE;
  pincelE.fillRect(xE, yE, tamanhoE, tamanhoE);
  pincelE.fill();
}

function desenhaCirculoE(xE, yE, raioE, corE) {
  pincelE.fillStyle = corE;
  pincelE.beginPath();
  pincelE.arc(xE, yE, raioE, 0, 2 * 3.14);
  pincelE.fill();
}

function desenhaPaletaDeCoresE() {
  desenhaQuadradoE(xVermelho, yQuadrados, tamanhoQuadrados, "red");
  desenhaQuadradoE(xVerde, yQuadrados, tamanhoQuadrados, "green");
  desenhaQuadradoE(xAzul, yQuadrados, tamanhoQuadrados, "blue");
}

function lidaComMovimentoDoMouseE(evento) {
  var x = evento.pageX - telaE.offsetLeft;
  var y = evento.pageY - telaE.offsetTop;

  if (desenha && podeDesenharNaAreaE(x, y)) {
    desenhaCirculoE(x, y, 5, corAtual);
  }
}

function habilitaDesenharE() {
  desenha = true;
}

function desabilitaDesenharE() {
  desenha = false;
}

function podeDesenharNaAreaE(x, y) {
  if (x >= 0 && x < 3 * tamanhoQuadrados && y >= 0 && y < tamanhoQuadrados) {
    return false;
  } else {
    return true;
  }
}

function selecionaCorE(evento) {
  var x = evento.pageX - telaE.offsetLeft;
  var y = evento.pageY - telaE.offsetTop;

  if (y > yQuadrados && y < yQuadrados + tamanhoQuadrados) {
    if (x > xVermelho && x < xVermelho + tamanhoQuadrados) {
      corAtual = "red";
    } else if (x > xVerde && x < xVerde + tamanhoQuadrados) {
      corAtual = "green";
    } else if (x > xAzul && x < xAzul + tamanhoQuadrados) {
      corAtual = "blue";
    }
  }
}

var telaE = document.querySelector("canvas.arte");
var pincelE = telaE.getContext("2d");

pincelE.fillStyle = "lightgray";
pincelE.fillRect(0, 0, 600, 400);

var desenha = false;
var corAtual = "blue";
var xVermelho = 0;
var xVerde = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

desenhaPaletaDeCoresE();

telaE.onmousemove = lidaComMovimentoDoMouseE;
telaE.onmousedown = habilitaDesenharE;
telaE.onmouseup = desabilitaDesenharE;
telaE.onclick = selecionaCorE;
