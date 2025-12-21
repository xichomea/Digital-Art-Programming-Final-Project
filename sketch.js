let system;
let windowRect;

function setup() {
  createCanvas(windowWidth, windowHeight);

  windowRect = {
    x: width/2 - 150, 
    y: height/2 - 120, 
    w: 300, 
    h: 240
  };

  system = new SoundField();
}

function draw() {
  background(70, 130, 180);

  noStroke();
  fill(255, 220, 220, 180);
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  stroke(255);
  strokeWeight(3);
  noFill();
  rect(windowRect.x, windowRect.y, windowRect.w, windowRect.h)

  line(
    windowRect.x + windowRect.w / 2,
    windowRect.y,
    windowRect.x + windowRect.w / 2,
    windowRect.y + windowRect.h
  );
  line(
    windowRect.x,
    windowRect.y + windowRect.h / 2,
    windowRect.x + windowRect.w,
    windowRect.y + windowRect.h / 2
  );
  
  let listener = createVector(mouseX, mouseY);

  system.applyForces(listener);
  system.update();
  system.display();

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  windowRect = {
    x: width / 2 - 150,
    y: height / 2 - 120,
    w: 300,
    h: 240
  };
}
}