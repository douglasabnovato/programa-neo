console.log("Starting ...");

document.write("<h3>Empty canvas</h3>");

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

// cabeça
pincel.fillStyle = "darkgreen";
pincel.fillRect(410, 20, 180, 150);

// olhos
pincel.fillStyle = "black";
pincel.fillRect(425, 30, 50, 50);
pincel.fillRect(525, 30, 50, 50);

// nariz
pincel.fillRect(475, 80, 50, 50);

// boca ou barba
pincel.fillRect(525, 100, 40, 60);
pincel.fillRect(435, 100, 40, 60);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "black";
pincel.beginPath();
pincel.moveTo(15, 15);
pincel.lineTo(15, 210);
pincel.lineTo(190, 210);
pincel.fill();

pincel.fillStyle = "white";
pincel.beginPath();
pincel.moveTo(30, 55);
pincel.lineTo(30, 195);
pincel.lineTo(155, 195);
pincel.fill();

var tela = document.querySelector("canvas.bandeira");
var pincel = tela.getContext("2d");

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 50);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
pincel.fill();

pincel.beginPath();
pincel.moveTo(300, 350);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
pincel.fill();

pincel.fillStyle = "darkblue";
pincel.beginPath();

pincel.arc(300, 200, 100, 0, 2 * 3.14);
pincel.fill();
