import * as THREE from "../node_modules/three/build/three.module.js";
import { camerasGUI } from "./gui.js";
const aspect = window.innerWidth / window.innerHeight;


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
const camera2 = new THREE.PerspectiveCamera( 50, 0.5 * aspect, 150, 1000 );

camera2.position.x = camerasGUI.camObserve.position.x;
camera2.position.z = camerasGUI.camObserve.position.z;
camera2.position.y = camerasGUI.camObserve.position.y;

const camera2Helper = new THREE.CameraHelper( camera2 );

scene.add( camera2Helper );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry = new THREE.BoxGeometry( 20, 20, 20 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 150;

function animate() {
    requestAnimationFrame( animate );
    camera2.position.x = camerasGUI.camObserve.position.x;
    camera2.position.y = camerasGUI.camObserve.position.y;
    camera2.position.z = camerasGUI.camObserve.position.z;
    camera2.far = camerasGUI.camObserve.far;
    camera2.near = camerasGUI.camObserve.near;
    camera2.fov = camerasGUI.camObserve.fov;
    camera2.lookAt(cube.position);
    camera2.updateProjectionMatrix();
    camera.position.z = camerasGUI.camRenderZ;



    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();