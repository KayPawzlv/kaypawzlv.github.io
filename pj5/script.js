
let backgroundImage;

let rectWidth, rectHeight;
let rect1X, rect1Y;

function preload() {
    // Load your image in the preload function
    backgroundImage = loadImage('onion.png');
}

function setup() {
    // Set canvas size to match image dimensions
    let canvas = createCanvas(backgroundImage.width, backgroundImage.height);
    canvas.parent('Gimme.gif'); 
    rectHeight = height / 4;
    let offsetY = height / 4;
    rect1X = 3 * width / 4 - rectWidth / 2;
    rect1Y = height / 8; // 
}
function draw() {
    background(backgroundImage);
    if (
        mouseX > rect1X && mouseX < rect1X + rectWidth && 
        mouseY > rect1Y && mouseY < rect1Y + rectHeight
    ){
        cursor(HAND);
    } else {
        cursor(ARROW); 
    }
}

function mouseClicked() {
    if (
        mouseX > rect1X && mouseX < rect1X + rectWidth && 
        mouseY > rect1Y && mouseY < rect1Y + rectHeight
    ) {  
        window.location.href = 'onion.png'; 
    } 
}
