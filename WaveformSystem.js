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