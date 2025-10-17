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
camera.position.z = 3;

const scene = new THREE.Scene();
// Three.js Setup =============================================================

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.3;

// less detailed
const geo = new THREE.IcosahedronGeometry(1.0, 2);
// more detailed
// const geo = new THREE.IcosahedronGeometry(1.0, 6);

// this material does not interact with light
// const mat = new THREE.MeshBasicMaterial({
    //     color: 0xccff
    // });
// this material does interact with light
const mat = new THREE.MeshStandardMaterial({
    // // light blue
    // color: 0xccff
    
    // white
    color: 0xffffff,
    flatShading: true
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
});
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
scene.add(wireMesh);


// white top , black bottom
// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000);
// white blue, orange
const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

function animate(t=0){
    requestAnimationFrame(animate);
    // animation
    mesh.scale.setScalar(0.1*Math.cos(t*0.003)+1.0);
    wireMesh.scale.setScalar(0.1*Math.cos(t*0.003)+1.0);
    
    // animation
    mesh.rotation.y=t*0.0002;
    wireMesh.rotation.y=t*0.0002;
    
    
    renderer.render(scene, camera);
    controls.update();
}
animate();

// put this call into the animation loop
// renderer.render(scene, camera);

