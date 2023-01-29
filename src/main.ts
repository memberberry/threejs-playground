import * as THREE               from 'three';
import { OrbitControls }        from 'three/examples/jsm/controls/OrbitControls';
import { PerspectiveCamera }    from 'three/src/cameras/PerspectiveCamera';
import { Scene }                from 'three/src/scenes/Scene';
import { PointLight }           from 'three/src/lights/PointLight'; 
import { Mesh }                 from 'three/src/objects/Mesh';
import { WebGLRenderer }        from 'three/src/renderers/WebGLRenderer';
import { Vector3 }              from 'three/src/math/Vector3';

import * as Lights  from './lights';
import * as Cameras from './cameras';
import * as Objects from './objects';
import * as GUI     from './gui';
import { BufferGeometry, MeshPhongMaterial } from 'three';
import { customGUI } from './gui';

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

const earthOrbitRadius = 20;
const moonOrbitRadius = 3;
const planets = [];
const solarSystem = new THREE.Object3D();
const earthOrbit = new THREE.Object3D();
const moonOrbit = new THREE.Object3D();

let gui = GUI.initGUI();



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



// cannot use type notation :Mesh with attributes. They have to by of type "any" which they are if not directly initialized
// sunMesh.geometry.parameters is not part of the API but part of the compiled sunMesh.geometry object so TS compiler is complaining it does not exist. 
// If type of sunMesh is any, typescript does not care apparently

let sunMesh = Lights.addSun(scene);
let earth = Objects.addEarth(scene);
console.log(earth);
const moon: Mesh = Objects.addMoon(scene);
console.log(earth.geometry);
earthOrbit.position.x = earthOrbitRadius;
moonOrbit.position.x = moonOrbitRadius;
//const orbitalRingEarth: Mesh = Objects.addOrbitalRing( earthOrbitRadius, earth.geometry.parameters.widthSegments * earthOrbitRadius, Math.PI * 2, '#999999');
let cube = Objects.addCube(scene);
let spaceBaseLight = Lights.addAmbientLight(scene);
let sunLight = Lights.addPointLight(scene);
console.log(earth.material);

moonOrbit.add(moon);
earthOrbit.add(moonOrbit);
earthOrbit.add(earth);
solarSystem.add(earthOrbit);
solarSystem.add(sunMesh);

planets.push(sunMesh);
planets.push(earth);
planets.push(earthOrbit);
planets.push(moonOrbit);
planets.push(solarSystem);
planets.push(moon);
console.log("sun radius:", sunMesh.geometry);


//scene.add(orbitalRingEarth);

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

    sunLight.intensity = gui.values.sunIntensity;
    spaceBaseLight.intensity = gui.values.ambientIntensity;
    (<THREE.MeshPhongMaterial>earth.material).shininess = gui.values.earthShininess;    
    (<THREE.MeshPhongMaterial>earth.material).specular = new THREE.Color(gui.values.earthSpecular);

    if( !(<customGUI>gui.values).pauseRotation ){
        planets.forEach(planet => {
            planet.rotation.y = time;
        });
    }
    

    controls.update();
        
    // Render the scene
    renderer.render(scene, camera);
};

requestAnimationFrame( render );