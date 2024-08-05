
var canvas = document.getElementById("canvas");
var out = document.getElementById("out");
canvas.width = 256;
canvas.height = 256;

/** @type {CanvasRenderingContext2D} */
var ctx = canvas.getContext("2d");

var pixelSize = 4;

function generatePixels(){
    let wIt = canvas.width/pixelSize;
    let hIt = canvas.height/pixelSize;
    
    let values = '';
    let data;


    for(i = 0; i <= wIt; i++){
        for(j = 0; j <= hIt; j++){
            let value = Math.floor(Math.random() * 255);
            ctx.fillStyle = `rgb(${value},${value},${value})`;
            ctx.fillRect(i*pixelSize,j*pixelSize,pixelSize,pixelSize);
            values += value.toString(2);
        }
    }
    out.textContent = values;
}

document.getElementById("action").addEventListener("click", (e) => generatePixels());
