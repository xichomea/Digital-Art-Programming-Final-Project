class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
    }

update() {
    this.pos.add(this.vel);
    this.add = createVector(0, 0);
}

display() {
    ellipse(this.pos.x, this.pos.y, 5);
}
}