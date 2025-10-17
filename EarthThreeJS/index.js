import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js" 


// Three.js Setup =============================================================
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

const scene = new THREE.Scene();
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.3;
// Three.js Setup =============================================================

// --- OBJECTS ---
const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4*Math.PI/180;
scene.add(earthGroup);

// cube object
// const geo = new THREE.BoxGeometry();

// sphere object (earth)
const detail = 16;
const geometry = new THREE.IcosahedronGeometry(1.0, detail);
// const material = new THREE.MeshStandardMaterial({
//     color: 0xffff00, // yellow
//     flatShading: true
// });
const loader = new THREE.TextureLoader();
const material = new THREE.MeshStandardMaterial({
    // map: loader.load("./earth_texture/earthmap1k.jpg"), // earth texture
    map: loader.load("./earth_texture/2k_earth_daymap.jpg"), // earth texture
    // map: loader.load("./jupiter_texture/jupitermap.jpg") // jupiter texture
})
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);
const earthNightMaterial = new THREE.MeshBasicMaterial({
    // color: 0x00ff00,
    transparent: true,
    opacity: 0.4,
    // map: loader.load("./earth_texture/earthlights1k.jpg"), // earth night
    map: loader.load("./earth_texture/2k_earth_nightmap.jpg"), // earth night
    blending: THREE.AdditiveBlending,
})
const earthNightMesh = new THREE.Mesh(geometry, earthNightMaterial);
earthGroup.add(earthNightMesh);
const earthCloudsMaterial = new THREE.MeshBasicMaterial({
    color: 0xeeffee,
    transparent: true,
    opacity: 0.15,
    map: loader.load("./earth_texture/2k_earth_clouds.jpg"), // earth night
    blending: THREE.AdditiveBlending,
})
const earthCloudsMesh = new THREE.Mesh(geometry, earthCloudsMaterial);
earthCloudsMesh.scale.setScalar(1.003);
earthGroup.add(earthCloudsMesh);

// TODO glow
// const fresnelMat;
// const glowMesh;
// glowMesh.scale.setScalar(1.01);
// earthGroup.add(glowMesh);


// TODO starts starfield
// const stars = getStarField({numStars: 2000});
// scene.add(stars);

// --- LIGHT ---
// white top , black bottom
// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000);
// scene.add(hemiLight);
const sunLight = new THREE.DirectionalLight(0xffffff);
sunLight.position.set(-2, 0.5, 2);
scene.add(sunLight);

function animate(t=0){
    requestAnimationFrame(animate);
    // animation
    // mesh.scale.setScalar(0.1*Math.cos(t*0.003)+1.0);
    // wireMesh.scale.setScalar(0.1*Math.cos(t*0.003)+1.0);
    
    // animation
    // mesh.rotation.y=t*0.0002;
    // wireMesh.rotation.y=t*0.0002;

    // animation
    earthMesh.rotation.y=t*0.0002;
    earthNightMesh.rotation.y = t*0.0002;
    earthCloudsMesh.rotation.y = t*0.0003;
    earthCloudsMesh.rotation.x = Math.sin(t*0.001)*0.05; // cloud wobble effect
    // glowMesh.rotation.y = t*0.0002;
        
    renderer.render(scene, camera);
    controls.update();
}
animate();

// put this call into the animation loop
// renderer.render(scene, camera);

