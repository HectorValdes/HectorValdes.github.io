var w = window.innerWidth;
var intro = document.getElementsByClassName("intro")[0];

intro.style.fontSize = w / 30 + "px";

var h = window.innerHeight;
var historia = document.getElementsByClassName("historia")[0];
var parrafos = document.getElementsByClassName("parrafos")[0];
var sonido = document.getElementById("sonido");
var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');
var num = 150;
var tamaño = 3;
var elementos = [];


historia.style.fontSize = w / 20 + "px";
parrafos.style.height = h + "px";

function animar() {
  intro.className = 'intro texto_intro animación_intro';
  historia.className = 'historia texto_historia animación_historia';
  sonido.play();
}



function inicio() {
  for (var i = 0; i < num; i++) {
    elementos[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      tamaño: Math.random() * tamaño
    };

  }
  nevada();
}

function nevada() {
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < num; i++) {
    var e = elementos[i];
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(e.x, e.y,e.tamaño,0,2*Math.PI);
    ctx.fill();
  }
}

window.addEventListener("resize", function() {
  w = window.innerWidth;
  h = window.innerHeight;
  intro.style.fontSize = w / 30 + "px";
  historia.style.fontSize = w / 20 + "px";
  parrafos.style.height = h + "px";
});
