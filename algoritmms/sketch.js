let gridSize = 45; 
let cols, rows;
let currentX, currentY;
let drawSpeed = 10; 
let moveCount = 0; 

function setup() {
  createCanvas(400, 400);
  cols = width / gridSize;
  rows = height / gridSize;
  currentX = 0;
  currentY = 0;
  background(255);
  drawGrid();
  frameRate(60); 
}

function draw() {
  if (frameCount % drawSpeed == 0) {
    rollDiceAndDraw();
  }
}

function drawGrid() {
  stroke(200);
  for (let i = 0; i <= cols; i++) {
    line(i * gridSize, 0, i * gridSize, height);
  }
  for (let j = 0; j <= rows; j++) {
    line(0, j * gridSize, width, j * gridSize);
  }
}

function rollDiceAndDraw() {
  let diceRoll = floor(random(1, 7));
  stroke(0);
  strokeWeight(2);
  
  let centerX = currentX + gridSize / 2;
  let centerY = currentY + gridSize / 2;

  moveCount++;
  console.log(`Move ${moveCount}: Position: (${currentX}, ${currentY}), Dice Roll: ${diceRoll}`);
  
  switch (diceRoll) {
    case 1:
      console.log("Drawing: Horizontal Line");
      line(currentX, centerY, currentX + gridSize, centerY);
      break;
    case 2:
      console.log("Drawing: Vertical Line");
      line(centerX, currentY, centerX, currentY + gridSize);
      break;
    case 3:
      console.log("Drawing: None");
      break;
    case 4:
      console.log("Drawing: X");
      line(currentX, centerY, currentX + gridSize, centerY);
      line(centerX, currentY, centerX, currentY + gridSize);;
      break;
    case 5:
      console.log("Drawing: None");
      break;
    case 6:
      console.log("Drawing: Diagonal Line TR-BL");
      line(currentX + gridSize, currentY, currentX, currentY + gridSize);
      break;
  }

  currentX += gridSize;
  if (currentX >= width) {
    currentX = 0;
    currentY += gridSize;
  }
  if (currentY >= height) {
    noLoop();
    console.log("Drawing complete");
  }
}

function keyPressed() {
  if (key == '1') {
    drawSpeed = 10; // Slow
    console.log("Speed: Slow");
  } else if (key == '2') {
    drawSpeed = 5; // Medium
    console.log("Speed: Medium");
  } else if (key == '3') {
    drawSpeed = 1; // Fast
    console.log("Speed: Fast");
  }
}