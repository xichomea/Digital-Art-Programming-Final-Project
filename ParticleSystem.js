class ParticleSystem {
    constructor() {
        this.particles = [];
        for (let i = 0; i < 50; i++) {
        this.particles.push(new Particle());
    }
    }

display() {
    for (let p of this.particles) {
        p.display();
    }
}
} 