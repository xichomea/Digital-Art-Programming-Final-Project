class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
    }

display() {
    ellipse(this.pos.x, this.pos.y, 5);
}
}