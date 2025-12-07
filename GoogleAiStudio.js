// Google AI Studio에서 nature of code에서 배우는 partcieSystem에 형태로 구현해 달라고 했지만 그게 아닌 결과가 나온 거 같음.



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Nature of Code - Particle System Waveform</title>
//     <style>
//         body { margin: 0; overflow: hidden; }
//         canvas { display: block; }
//     </style>
// </head>
// <body>
//     <canvas id="webgl-canvas"></canvas>

//     <script type="module">
//         import * as THREE from 'https://esm.run/three';
//         import { OrbitControls } from 'https://esm.run/three/examples/jsm/controls/OrbitControls';

//         const canvas = document.getElementById('webgl-canvas');
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ canvas });
//         renderer.setPixelRatio(2);
//         renderer.setSize(window.innerWidth, window.innerHeight);

//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.autoRotate = true;
//         controls.autoRotateSpeed = 2.0;

//         camera.position.z = 50;

//         // Particle System Properties
//         const numParticles = 20000;
//         const particles = new THREE.Group();
//         const particleGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//         const colors = [
//             0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff, 0xffa500, 0x800080
//         ];

//         // Particle class (simplified for Three.js voxels)
//         class Particle {
//             constructor() {
//                 this.mesh = new THREE.Mesh(
//                     particleGeometry,
//                     new THREE.MeshBasicMaterial({ color: colors[Math.floor(Math.random() * colors.length)] })
//                 );
//                 this.position = new THREE.Vector3();
//                 this.velocity = new THREE.Vector3();
//                 this.acceleration = new THREE.Vector3();
//                 this.lifespan = 1; // Not directly used as particles are always "alive" but represent their state
//             }

//             // Simple update for demonstration
//             update() {
//                 this.velocity.add(this.acceleration);
//                 this.position.add(this.velocity);
//                 this.acceleration.multiplyScalar(0); // Reset acceleration
//                 this.mesh.position.copy(this.position);
//             }

//             applyForce(force) {
//                 this.acceleration.add(force);
//             }
//         }

//         const particleInstances = [];
//         for (let i = 0; i < numParticles; i++) {
//             const particle = new Particle();
//             particle.position.set(
//                 (Math.random() - 0.5) * 200, // Spread particles initially
//                 (Math.random() - 0.5) * 200,
//                 (Math.random() - 0.5) * 200
//             );
//             particle.mesh.position.copy(particle.position);
//             particles.add(particle.mesh);
//             particleInstances.push(particle);
//         }
//         scene.add(particles);

//         // Mouse interaction
//         let mouseX = 0;
//         let mouseY = 0;

//         document.addEventListener('mousemove', (event) => {
//             mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//             mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
//         });

//         // Animation loop
//         const animate = () => {
//             requestAnimationFrame(animate);

//             // Calculate 'sound proximity' based on mouseX
//             // mouseX ranges from -1 (left) to 1 (right)
//             // Let's map this to a "distance" from 0 (close) to 1 (far)
//             const soundDistance = (mouseX + 1) / 2; // 0 (left, close) to 1 (right, far)

//             // Waveform parameters
//             const waveFrequency = 5; // How many waves
//             const baseAmplitude = 10;
//             const thicknessScale = 1;

//             // Distort and thicken based on soundDistance
//             // Closer (soundDistance -> 0): more distortion, thicker particles
//             // Further (soundDistance -> 1): less distortion, thinner particles
//             const currentAmplitude = baseAmplitude * (1 - soundDistance); // Amplitude decreases as sound gets further
//             const currentThickness = thicknessScale * (1 - soundDistance); // Thickness decreases as sound gets further

//             const distortionFactor = THREE.MathUtils.lerp(1.5, 0.1, soundDistance); // Distortion decreases as sound gets further
//             const spreadFactor = THREE.MathUtils.lerp(10, 1, soundDistance); // Spread decreases as sound gets further

//             let time = performance.now() * 0.001;

//             for (let i = 0; i < numParticles; i++) {
//                 const p = particleInstances[i];

//                 // Base wave along X or Z axis
//                 const xPos = (i % (numParticles / 100)) * 0.5 - 50; // Spread particles along X
//                 const zOffset = Math.sin(xPos * 0.5 + time * waveFrequency * 0.1) * currentAmplitude;

//                 // Add some chaotic distortion based on sound proximity
//                 const distortionX = Math.sin(p.position.y * 0.1 + time * distortionFactor) * currentAmplitude * 0.5;
//                 const distortionY = Math.cos(p.position.z * 0.1 + time * distortionFactor) * currentAmplitude * 0.5;

//                 // Apply forces to simulate particle movement
//                 // Simplified, just setting positions for wave effect
//                 p.position.set(
//                     xPos + distortionX * spreadFactor * (Math.random() - 0.5),
//                     zOffset + distortionY * spreadFactor * (Math.random() - 0.5),
//                     (Math.sin(p.position.x * 0.1 + time * waveFrequency * 0.05) * 5 + Math.cos(p.position.y * 0.05 + time * waveFrequency * 0.08)) * currentAmplitude * 0.1
//                 );

//                 // Adjust particle size based on thickness
//                 const scale = Math.max(0.1, currentThickness * (Math.random() * 0.5 + 0.5)); // Min scale of 0.1
//                 p.mesh.scale.set(scale, scale, scale);

//                 p.mesh.position.copy(p.position);
//             }

//             controls.update();
//             renderer.render(scene, camera);
//         };

//         animate();

//         // Handle window resizing
//         window.addEventListener('resize', () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         });
//     </script>
// </body>
// </html>