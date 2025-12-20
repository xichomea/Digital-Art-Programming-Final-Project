class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
    }

display() {
    ellipse(this.pos.x, this.pos.y, 5);
}
}