import * as THREE from '../node_modules/three/src/Three.js';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------
const fov: number = 105;
const near: number = 0.1;
const far: number = 1000;
const aspect: number = window.innerWidth/window.innerHeight;

// Create an empty scene
var scene: THREE.Scene = new THREE.Scene();

// Create a basic perspective camera
var camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera( fov, aspect, near, far );

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
var geometry: THREE.BoxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
var material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial( { color: "#171e69" } );
var cube: THREE.Mesh = new THREE.Mesh( geometry, material );
const light: THREE.PointLight = new THREE.PointLight( 0xff0000, 1, 100 );

camera.position.set( 0, 5, 10);
light.position.set( 5, 5, 5 );


const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.update();

// Add cube to Scene
scene.add( cube );
scene.add( light );

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