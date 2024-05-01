let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/doorbell');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}