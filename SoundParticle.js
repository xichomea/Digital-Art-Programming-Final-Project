class SoundParticle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D().mult(random(0.5, 1.5));
        this.acc = createVector(0 ,0);
        this.mass = random(0.5, 1.5);
        this.type = random() < 0.5 ? 'good' : 'bad';
    }

applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
}

  update(outside) {
    let noiseForce = p5.Vector.random2D().mult(outside ? 0.15 : 0.05);
    this.applyForce(noiseForce);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.mult(0.95);
    this.acc.mult(0);

    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  display(outside, stateValue) {
    noStroke();

    let goodAlpha = map(stateValue, 0, 100, 40, 220);
    let badAlpha  = map(stateValue, 0, 100, 220, 40);

    if (outside) {
      if (this.type === 'good') {
        fill(255, 240, 170, goodAlpha);
        ellipse(this.pos.x, this.pos.y, 7);
        fill(255, 250, 210, goodAlpha * 0.4);
        ellipse(this.pos.x, this.pos.y, 14);
      } else {
        fill(120, 20, 20, badAlpha);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(frameCount * 0.02);
        beginShape();
        vertex(0, -6);
        vertex(5, 4);
        vertex(-5, 4);
        endShape(CLOSE);
        pop();
      }
    } else {
      fill(180, 130, 220, 180);
      ellipse(this.pos.x, this.pos.y, 6);
    }
  }
}