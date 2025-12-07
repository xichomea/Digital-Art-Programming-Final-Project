let wf; // waveform system

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  wf = new WaveformSystem(createVector(0, 0, 0));

  for (let i = 0; i < 2000; i++) {
    wf.addPoint();
  }
}

function draw() {
  background(0);
  orbitControl();

  const mouseNorm = map(mouseX, 0, width, -1, 1);
  const soundDistance = map(mouseNorm, -1, 1, 0, 1);

  const params = {
    waveFrequency: 5,
    baseAmplitude: 50,
    distortion: lerp(1.5, 0.1, soundDistance),
    spread: lerp(10, 1, soundDistance),
    amplitude: 50 * (1 - soundDistance),
    thickness: 1 * (1 - soundDistance),
  };

  rotateY(frameCount * 0.002);

  wf.run(params);
}

// ----------------------------
// WavePoint (old: Particle)
// ----------------------------
class WavePoint {
  constructor(origin) {
    this.pos = origin.copy().add(
      p5.Vector.random3D().mult(random(200))
    );
    this.vel = createVector(0, 0, 0);
    this.acc = createVector(0, 0, 0);
    this.lifespan = 255;
    this.scale = random(0.3, 1);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update(params) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    const t = millis() * 0.001;

    const x = this.pos.x;
    const waveZ = sin(x * 0.05 + t * params.waveFrequency) * params.amplitude;

    const dX = sin(this.pos.y * 0.05 + t * params.distortion) * params.amplitude * 0.5;
    const dY = cos(this.pos.z * 0.05 + t * params.distortion) * params.amplitude * 0.5;

    this.pos.x = x + dX * params.spread * random(-1, 1);
    this.pos.y = waveZ + dY * params.spread * random(-1, 1);
    this.pos.z =
      sin(this.pos.x * 0.05 + t * params.waveFrequency * 0.5) * (params.amplitude * 0.2);

    this.currentScale = max(0.1, params.thickness * this.scale);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    noStroke();
    fill(255);
    box(this.currentScale * 8);
    pop();
  }
}

// ----------------------------
// WaveformSystem (old: ParticleSystem)
// ----------------------------
class WaveformSystem {
  constructor(origin) {
    this.origin = origin.copy();
    this.points = [];
  }

  addPoint() {
    this.points.push(new WavePoint(this.origin));
  }

  run(params) {
    for (let p of this.points) {
      p.applyForce(createVector(0, 0, 0));
      p.update(params);
      p.display();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
