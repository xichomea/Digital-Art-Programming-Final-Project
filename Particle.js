class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
    }

applyForce(force) {
    this.acc.add(force);
}

update() {
    this.pos.add(this.vel);
    this.acc = createVector(0, 0);
}

display() {
    ellipse(this.pos.x, this.pos.y, 5);
}
}