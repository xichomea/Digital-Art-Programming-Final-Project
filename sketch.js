let system;
let windowRect;
let stateSlider;
let stateLabel;

function setup() {
  createCanvas(windowWidth, windowHeight);

  windowRect = {
    x: width/2 - 300, 
    y: height/2 - 240, 
    w: 600, 
    h: 480
  };

  stateSlider = createSlider(0, 100, 50);
  stateSlider.position(20, 20);
  stateSlider.style('width', '200px');

  stateLabel = createDiv('내 상태: 50');
  stateLabel.position(20, 45);
  stateLabel.style('color', 'white');

  system = new SoundField();
}

function draw() {
  background(70, 130, 180);

  let stateValue = stateSlider.value();
  stateLabel.html('내 상태: ' + stateValue);

  noStroke();
  fill(255, 220, 220, 180);
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  stroke(255);
  strokeWeight(3);
  noFill();
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  line(windowRect.x + windowRect.w / 2, windowRect.y,
       windowRect.x + windowRect.w / 2, windowRect.y + windowRect.h);
  line(windowRect.x, windowRect.y + windowRect.h / 2,
       windowRect.x + windowRect.w, windowRect.y + windowRect.h / 2);
  
  let listener = createVector(mouseX, mouseY);

  system.applyForces(listener);
  system.update();
  system.display(stateValue);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  windowRect = {
    x: width / 2 - 150,
    y: height / 2 - 120,
    w: 300,
    h: 240
  };
}