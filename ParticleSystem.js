class ParticleSystem {
    constructor() {
        this.particles = [];
        for (let i = 0; i < 50; i++) {
        this.particles.push(new Particle());
    }
    }

applyForces(listener) {
    for (let p of this.particles) {
        let dir = p5.Vector.sub(listener, p.pos);
        let d = dir.mag();
        dir.normalize();

        if (d < 100) {
            let repel = dir.copy().mult(-0.5);
            p.applyForce(repel);
        }

        if (d > 150) {
            let attract = dir.copy().mult(0.1);
            p.applyForce(attract);
        }
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