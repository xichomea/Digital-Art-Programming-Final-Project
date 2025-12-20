class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
    }

applyForce(force) {
    this.acc.add(force);
}

update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = mult(0);
}

display() {
    ellipse(this.pos.x, this.pos.y, 5);
}
}