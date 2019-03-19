var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height/2;
var dx = 5;
var dy = -5;
var ballRadius = 13;


var _this = this;
window.onkeydown = function(e) {
    if (e.keyCode === 65) {
      _this.x -= _this.dx;
    } else if (e.keyCode === 68) {
      _this.x += _this.dx;
    } else if (e.keyCode === 83) {
      _this.y -= _this.dy;
    } else if (e.keyCode === 87) {
      _this.y += _this.dy;
    }
  };

function drawBall() {
    ctx.beginPath();
    var bolti =ctx.arc(x, y, 10, ballRadius, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();


    if (bolti.ballRadius < canvas.width &&
   bolti.ballRadius > canvas.width &&
   bolti.ballRadius < canvas.height &&
   canvas.height > bolti.ballRadius) {
}
}


setInterval(draw, 10);