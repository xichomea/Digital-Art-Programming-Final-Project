class SoundParticle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.acc = createVector(0 ,0);
        this.mass = random(0.5, 1.5);
        this.type = random() > 0.5 ? 'good' : 'bad';
    }

applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
}

  update(outside) {
    if (outside) {
      let randomness = this.type === 'bad' ? 0.8 : 0.5;
      this.vel.add(p5.Vector.random2D().mult(randomness));
    } else {
      this.vel.add(p5.Vector.random2D().mult(0.08));
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.mult(0.95);
    this.acc.mult(0);

    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  display(outside) {
    noStroke();

    if (outside) {
      if (this.type === 'good') {
        fill(255, 255, 150, 200);
        ellipse(this.pos.x, this.pos.y, 8);
        fill(255, 255, 200, 100);
        ellipse(this.pos.x, this.pos.y, 14);
      } else {
        fill(100, 0, 0, 200);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(frameCount * 0.1);
        beginShape();
        vertex(0, -6);
        vertex(4, 4);
        vertex(-4, 4);
        endShape(CLOSE);
        pop();
      }
    } else {
      fill(180, 130, 220, 220);
      ellipse(this.pos.x, this.pos.y, 6);
    }
  }
}