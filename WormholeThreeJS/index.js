import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import spline from "./spline.js"

spline;

// Three.js setup =============================================================
const w=window.innerWidth;
const h=window.innerHeight;
const renderer=new THREE.WebGLRenderer({ antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov=75;
const aspect=w/h;
const near=0.1;
const far=1000;
const camera=new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z=2;

const scene=new THREE.Scene();
const controls=new OrbitControls(camera, renderer.domElement);
controls.enableDamping=true;
controls.dampingFactor=0.3;
// Three.js setup =============================================================

// Scene objects ==============================================================
// ------ BOX ------
// const boxGeo = new THREE.BoxGeometry();
// const boxMat = new THREE.MeshStandardMaterial({
//         color: 0xffff00,
//         transparent: true, 
//         opacity: 0.3,
// });
// const box = new THREE.Mesh(boxGeo, boxMat);
// scene.add(box);

// ------ SPLINE ------
console.log(spline);
const points =spline.getPoints(100);
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const line = new THREE.Line(geometry, material);
// scene.add(line)

// ------ TUBE ------
const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true);
// const tubeMat = new THREE.MeshStandardMaterial({
    //     color: 0x0099ff,
    //     side: THREE.DoubleSide, 
    //     wireframe: true,
    // });
const tubeMat = new THREE.MeshBasicMaterial({
    color: 0x0099ff,
    side: THREE.DoubleSide, 
    wireframe: true,
});
const tube = new THREE.Mesh(tubeGeo, tubeMat);
// scene.add(tube);

// ------ TUBE EDGES ------
const edgesGeo = new THREE.EdgesGeometry(tubeGeo, 0.2);
const edgesMat = new THREE.LineBasicMaterial({ color: 0xffffff });
const tubeEdges = new THREE.LineSegments(edgesGeo, edgesMat);
scene.add(tubeEdges);


// ------ TUNNEL OBJECTS (BOXES) ------
const numBoxes = 2000;
const boxSize = 0.075;
const boxGeo = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
const boxMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, 
    wireframe: true,
});
for (let i=0;i<numBoxes;i += 1){
    const box = new THREE.Mesh(boxGeo, boxMat);
    const p = (i / numBoxes + Math.random() + 0.1) % 1;
    const pos = tubeGeo.parameters.path.getPointAt(p);
    pos.x += Math.random() - 0.4;
    pos.z += Math.random() - 0.4;
    box.position.copy(pos);
    const rot = new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
    );
    box.rotation.set(rot.x, rot.y, rot.z);
    // const helper = new THREE.BoxHelper(box, 0xffff00);
    scene.add(box);
    // scene.add(helper);
}

// ------ LIGHT ------
const hemiLight= new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);


// ------ FOG ------
scene.fog = new THREE.FogExp2(0x000000, 0.3);


// ------ camera fly through ------
function updateCamera(t=0){
    const time = t * 0.2;
    const looptime = 10 * 1000;
    const p = (time % looptime) / looptime;
    const pos = tubeGeo.parameters.path.getPointAt(p);
    const lookAt = tubeGeo.parameters.path.getPointAt(( p + 0.01 ) % 1 );
    camera.position.copy(pos);
    camera.lookAt(lookAt);
}

// Animation Loop =============================================================

function animate(t=0){
    requestAnimationFrame(animate);

    // // animate box
    // box.rotation.x+=0.01;
    // box.rotation.y+=0.02;

    // fly-through animation
    updateCamera(t);

    renderer.render(scene, camera);
    controls.update();
};
animate();



function handleWindowResize(){};