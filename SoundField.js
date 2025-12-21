class SoundField {
    constructor() {
        this.particles = [];
        for (let i = 0; i < 100; i++) {
            this.particles.push(new SoundParticle());
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

applyForces() {
    for (let p of this.particles) {
        let outside = this.isOutsideWindow(p.pos);

    if (outside) {
        let gentleDrift = p5.Vector.random2D().mult(0.05);
        p.applyForce(gentleDrift);
      }
    }
  }

update() {
    for (let p of this.particles) {
      let outside = this.isOutsideWindow(p.pos);
        p.update(outside);
    }
}

display(stateValue) {
    for (let p of this.particles) {
        let outside = this.isOutsideWindow(p.pos);
        p.display(outside, stateValue);
    }
}
} 