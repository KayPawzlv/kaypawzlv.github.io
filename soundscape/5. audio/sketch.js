let userHasClicked = false;

let metalSound;
function preload() {
  metalSound = loadSound('assets/metal.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(46);
textAlign(CENTER);
metalSound.setVolume(0)
}

function draw() {

  background('hotpink');
if(userHasClicked == false){
  text(
'Hi, please click to continue, please, please!',
width/2,
height/2
  )
} else{

  if(metalSound.isPlaying() ==false){
    metalSound.play();
  }

   let targetVolume = map(
    mouseX, //the incoming number
    0, // the minimum incoming
    width, //maximum incoming
    0, //minimum output
    1 //maximum output
   )
  metalSound.setVolume(targetVolume)

  
}

}

function mouseClicked(){
 userHasClicked = true;
}
