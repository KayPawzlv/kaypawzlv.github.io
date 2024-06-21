function setup() {
    createCanvas(1500, 1500);
    sls = [];
    radius = 50;
    for(i = 0; i < 20; i++){
      sls.push(new SlopeLine(200+radius*cos(TWO_PI/20*i),
                             200+radius*sin(TWO_PI/20*i),
                             200+radius*cos(TWO_PI/20*i)*2,
                             200+radius*sin(TWO_PI/20*i)*2,
                             random(1,35),
               random(1,35)));
   }
  }
  
  function draw() {
    background(220);
    
    for(i = 0; i < 20; i++){
      stroke(0)
      strokeWeight(3);
      sls[i].display();
  
      strokeWeight(5);
      stroke(255,0,0)
      point(200+radius*cos(TWO_PI/20*i),
                             200+radius*sin(TWO_PI/20*i));
      point(200+radius*cos(TWO_PI/20*i)*2,
                             200+radius*sin(TWO_PI/20*i)*2);
   }
  }