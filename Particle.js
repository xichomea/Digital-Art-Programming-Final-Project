class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.acc = createVector(0 ,0);
        this.mass = random(0.5, 1.5);
    }

applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
}

update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
}

display(outside) {
    noStroke();
    if (outside) {
    fill(255, 220, 150, 180);
    ellipse(this.pos.x, this.pos.y, 5);
    } else {
        fill(180, 130, 220, 220);
        ellipse(this.pos.x, this.pos.y, 6);
    }
}
}