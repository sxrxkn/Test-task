const canvas = document.querySelector('.canvas')
const context = canvas.getContext('2d');

context.lineWidth = 3;
context.strokeStyle = "black";

context.rect(0, 0, 300, 150);
context.stroke();

context.rect(600, 0, 200, 200);
context.stroke();

context.beginPath();
context.moveTo(600, 600);
context.lineTo(700, 400);
context.lineTo(800, 600);
context.lineTo(600, 600);
context.stroke();

context.beginPath();
context.arc(120, 480, 120, 0, 2 * Math.PI, false);
context.stroke();
