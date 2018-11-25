document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas'); // in your HTML this element appears as <canvas id="mycanvas"></canvas>
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 400, 300);
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fillStyle = "green";
  ctx.fill();
});
