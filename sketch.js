let wf; // waveform system

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  wf = new WaveformSystem(createVector(0, 0, 0));

  for (let i = 0; i < 2000; i++) {
    wf.addPoint();
  }
}

function draw() {
  background(0);
  orbitControl();

  const mouseNorm = map(mouseX, 0, width, -1, 1);
  const soundDistance = map(mouseNorm, -1, 1, 0, 1);

  const params = {
    waveFrequency: 5,
    baseAmplitude: 50,
    distortion: lerp(1.5, 0.1, soundDistance),
    spread: lerp(10, 1, soundDistance),
    amplitude: 50 * (1 - soundDistance),
    thickness: 1 * (1 - soundDistance),
  };

  rotateY(frameCount * 0.002);

  wf.run(params);
}