class ParticleSystem {
    constructor() {
        this.particles = [];
        for (let i = 0; i < 50; i++) {
        this.particles.push(new Particle());
    }
    }

applyForces(listener) {
    for (let p of this.particles) {

    }
}

update() {
    for (let p of this.particles) {
        p.update();
    }
}

display() {
    for (let p of this.particles) {
        p.display();
    }
}
} 