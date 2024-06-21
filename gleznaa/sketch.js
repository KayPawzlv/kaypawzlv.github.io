let x,y,x1,y1,x2,y2,r,g,b


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  frameRate(6);
  
}

function draw() {
  r = random (0);
  g = 0;
  b = random (0);
  x = random(width);
  y = random(height);
  
  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);

  r = random (255);
  g = 0;
  b = random (255);
  x = random (width);
  y = random (height);
  
  noStroke();
  fill(r,g,b,100);
  circle(x,y,10);
  
  r = random (255);
  g = 0;
  b = random (255);
  x = random (width);
  y = random (height);
  
  noStroke();
  fill(r,g,b,50);
  square(x,y,5);
  
  r = random (0);
  g = 0;
  b = random (0);
  x = random (width);
  y = random (height);
  
  noStroke();
  fill(r,g,b,100);
  square(x,y,10);
  
  r = random (255);
  g = 0;
  b = random (255);
  x = random (width);
  y = random (height);
  
  noStroke();
  fill(r,g,b,100);
  square(x,y,250);
  
   
  r = random (0);
  g = 0;
  b = random (0);
  x = random (width);
  y = random (height);
  
  noStroke();
  fill(r,g,b,100);
  ellipse(x,y,100);  
   
  }