import * as THREE from '../node_modules/three/src/Three.js';
import { OrbitControls }        from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { PerspectiveCamera }    from '../node_modules/three/src/cameras/PerspectiveCamera.js';
import { Scene }                from '../node_modules/three/src/scenes/Scene.js';
import { PointLight }           from '../node_modules/three/src/lights/PointLight.js'; 
import { Mesh } from '../node_modules/three/src/objects/Mesh.js';
import { WebGLRenderer } from '../node_modules/three/src/renderers/WebGLRenderer.js';
import * as Lights from './lights';
import * as Cameras from './cameras';
import * as Objects from './objects';
import { Vector3 } from '../node_modules/three/src/math/Vector3.js';
// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------
export const SCALE = 10;

const planets = [];
const solarSystem = new THREE.Object3D();

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
//let cube = Objects.addCube(scene);

// add lights
const sunMesh: Mesh = Lights.addSun(scene);
const earth: Mesh = Objects.addEarth(scene);
Lights.addAmbientLight(scene);
Lights.addPointLight(scene);
solarSystem.add(sunMesh);
solarSystem.add(earth);
planets.push(sunMesh);
planets.push(earth);
planets.push(solarSystem);

// add Orbit Controls
const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

scene.add(solarSystem);
// Render Loop

// time verwenden bewirkt das sich geschwindigkeit 
// von Sonnen um eigene Achse und Erde um Sonne nicht gleich sind was realistischer aussieht
// würde ich nur ...rotation.y += 1 dreht sich Sonne und Erde um Sonne immer genau gleich
function render(time): void {

    time *= 0.0005;
    requestAnimationFrame( render );
    
    planets.forEach(planet => {
        planet.rotation.y = time;
    });

    //const center = new Vector3(0, 1, 0);
    //earth.rotateOnWorldAxis( center, Math.PI );

    controls.update();
        
    // Render the scene
    renderer.render(scene, camera);
};

requestAnimationFrame( render );