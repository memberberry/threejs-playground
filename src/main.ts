import * as THREE from '../node_modules/three/src/Three.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { PerspectiveCamera } from "../node_modules/three/src/cameras/PerspectiveCamera.js"; 
import * as Lights from "./lights";
import * as Cameras from "./cameras";
// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

const ambientColor: number = 0x00FFFF;
const ambientIntesitiy: number = 1.5;

// Create an empty scene
var scene: THREE.Scene = new THREE.Scene();

// Create a basic perspective camera
const camera: PerspectiveCamera = Cameras.getPerspectiveCamera();

// Create a renderer with Antialiasing
var renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({antialias:true});

// Configure background color
renderer.setClearColor("#000015");

// window size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
const geometry: THREE.BoxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const material: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial( { color: "#FF0000" } );
const cube: THREE.Mesh = new THREE.Mesh( geometry, material );


Lights.addPointLight(scene);

const ambientLight: THREE.AmbientLight = new THREE.AmbientLight( ambientColor, ambientIntesitiy );




console.log(cube.material)
const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.update();
// Add cube to Scene
scene.add( cube );
scene.add( ambientLight );

// Render Loop
function render(): void {
    requestAnimationFrame( render );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();
        
    // Render the scene
    renderer.render(scene, camera);
};

render();