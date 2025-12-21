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
        let outside = this.isOutsideWindow(p.pos);

        // listener와 거리 계산
        let dir = p5.Vector.sub(listener, p.pos);
        let d = dir.mag();
        dir.normalize();

    if (outside) {
      if (d < 120) {          // repel (가까우면 밀기)
        let repel = dir.copy().mult(-1.0);
        p.applyForce(repel);
      }
      if (d > 150) {          // attract (멀면 당기기)
        let attract = dir.copy().mult(0.2);
        p.applyForce(attract);
      }
    }

    else {
      if (d > 200) {
        let gentleAttract = dir.copy().mult(0.05);
        p.applyForce(gentleAttract);
      }
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
        let outside = this.isOutsideWindow(p.pos);
        p.display(outside);
    }
}
} 