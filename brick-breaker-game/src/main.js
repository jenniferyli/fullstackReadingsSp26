import "./style.css";
import Block from "./model/block.js";


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50); // x, y, width, height
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();


let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 2;
const dy = -2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    const redBlock = new Block(20, 40, 50, 50, "#FF0000");
    redBlock.draw(ctx);

    x += dx;
    y += dy;

    window.requestAnimationFrame(draw);
}

draw();
