class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.angle = random(TWO_PI);
    this.radius = random(50, 150);
  }

  update(listener, center) {
    let dir = p5.Vector.sub(this.pos, listener);
    let dist = dir.mag();

    // 흔들림 강도
    let shake = map(dist, 0, width/2, 10, 0);

    // 원형 궤도 업데이트
    this.angle += 0.02 + random(-0.01, 0.01);
    this.pos.x = center.x + this.radius * cos(this.angle) + random(-shake, shake);
    this.pos.y = center.y + this.radius * sin(this.angle) + random(-shake, shake);
  }

  show() {
    fill(200, 100);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 5);
  }
}