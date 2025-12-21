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
        if (!outside) continue;

      let closestX = constrain(p.pos.x, windowRect.x, windowRect.x + windowRect.w);
      let closestY = constrain(p.pos.y, windowRect.y, windowRect.y + windowRect.h);
      let edgePoint = createVector(closestX, closestY);

      let dir = p5.Vector.sub(edgePoint, p.pos);
      let d = dir.mag();
      dir.normalize();

      // repel: 가까우면 밀기
      if (d < 80) {
        let repel = dir.copy().mult(-0.25);
        p.applyForce(repel);
      }

      // attract: 멀면 랜덤 드리프트
      else if (d > 200) {
        let attract = p5.Vector.random2D().mult(0.03);
        p.applyForce(attract);
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