class ParticleSystem {
    constructor() {
        this.particles = [];
        
        for (let i = 0; i < 50; i++) {
            this.particles.push(new Particle());
    }
    }

isOutsideWindow(pos) {
    return !(
        pos.x > windowRect.x &&
        pos.x < windowRect.x + windowRect.w &&
        pos.y > windowRect.y &&
        pos.y < windowRect.y + windowRect.h
    );
}

applyForces(listener) {
    for (let p of this.particles) {

        // listener와 거리 계산
        let dir = p5.Vector.sub(listener, p.pos);
        let d = dir.mag();
        dir.normalize();

        // repel (가까우면 밀기)
        if (d < 100) {
            let repel = dir.copy().mult(-0.5);
            p.applyForce(repel);
        }

        // attract (멀면 당기기)
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