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
  circle(x,y,5);

  r = random (255);
  g = random (255);
  b = random (224);
  x = random (width);
  y = random (height);

  noStroke();
  fill(r,g,b,100);
  circle(x,y,10);
  
  r = 0;
  g = 0;
  b = random (128);
  x = random (width);
  y = random (height);
  
  noStroke();
  fill(r,g,b,50);
  square(x,y,5);
  
  r = random (0);
  g = 0;
  b = random (51);
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
  
  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);

  r = random (51);
  g = random (51);
  b = random (51);
  x = random (width);
  y = random (height);

  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);

  r = random (150);
  g = random (150);
  b = random (150);
  x = random (width);
  y = random (height);
   
  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);
  noStroke();

  fill(r,g,100,100);
  square(x,y,250);

  r = 0;
  g = random (51);
  b = 0;
  x = random (width);
  y = random (height);


  noStroke();
  fill(r,51,b,100);
  square(x,y,250);

  fill(r,g,100,100);
  square(x,y,250);

  r = 0;
  g = random (51);
  b = 0;
  x = random (width);
  y = random (height);


  noStroke();
  fill(51,51,51,100);
  square(x,y,250);

  fill(r,g,100,100);
  square(x,y,250);

  r = 0;
  g = random (51);
  b = 0;
  x = random (width);
  y = random (height);

  noStroke();
  fill(r,g,128,100);
  square(x,y,250);
  
  fill(r,g,100,100);
  square(x,y,250);

  r = 0;
  g = random (51);
  b = 0;
  x = random (width);
  y = random (height);
  
  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);

  r = random (150);
  g = random (150);
  b = random (150);
  x = random (width);
  y = random (height);


  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);

  r = random (157);
  g = random (175);
  b = random (195);
  x = random (width);
  y = random (height);



  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);

  r = random (250);
  g = random (155);
  b = random (0);
  x = random (width);
  y = random (height);


  noStroke();
  fill(r,g,b,100);
  circle(x,y,5);

  r = random (0);
  g = random (150);
  b = random (0);
  x = random (width);
  y = random (height);
  }