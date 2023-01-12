//import * as THREE from '../node_modules/three/src/Three.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { PerspectiveCamera } from "../node_modules/three/src/cameras/PerspectiveCamera.js";
import { WebGLRenderer } from "../node_modules/three/src/renderers/WebGLRenderer.js";
import { Scene } from "../node_modules/three/src/scenes/Scene.js"; 
import * as Lights from "./lights";
import * as Cameras from "./cameras";
import * as Objects from "./objects";

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------


// Create an empty scene
var scene: Scene = new Scene();

// Create a basic perspective camera
const camera: PerspectiveCamera = Cameras.getPerspectiveCamera();

// Create a renderer with Antialiasing
var renderer: WebGLRenderer = new WebGLRenderer({antialias:true});

// Configure background color
renderer.setClearColor("#000008");

// window size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material

// add Scene Objects
let cube = Objects.addCube(scene);

// add lights
Lights.addPointLight(scene);
Lights.addAmbientLight(scene);
//Lights.addHemisphereLight(scene);

// add Orbit Controls
const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.update();

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