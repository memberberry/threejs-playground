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


// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

export const SCALE = 10;
const GUIValues = {
    pauseRotation : false,
    sunIntensity: 1,
    ambientIntensity: 0.1,
    earthSpecular: 0x0000ff,
    earthShininess: 1
    
}
const earthOrbitRadius = 20;
const moonOrbitRadius = 3;
const planets = [];
const solarSystem = new THREE.Object3D();
const earthOrbit = new THREE.Object3D();
const moonOrbit = new THREE.Object3D();

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


let gui = GUI.addGUI();

// cannot use type notation :Mesh with attributes. They have to by of type "any" which they are if not directly initialized
// sunMesh.geometry.parameters is not part of the API but part of the compiled sunMesh.geometry object so TS compiler is complaining it does not exist. 
// If type of sunMesh is any, typescript does not care apparently

let sunMesh, earth;
sunMesh = Lights.addSun(scene);
earth = Objects.addEarth(scene);
const moon: Mesh = Objects.addMoon(scene);
console.log(earth.geometry);
earthOrbit.position.x = earthOrbitRadius;
moonOrbit.position.x = moonOrbitRadius;
//const orbitalRingEarth: Mesh = Objects.addOrbitalRing( earthOrbitRadius, earth.geometry.parameters.widthSegments * earthOrbitRadius, Math.PI * 2, '#999999');
let cube = Objects.addCube(scene);
let spaceBaseLight = Lights.addAmbientLight(scene);
let sunLight = Lights.addPointLight(scene);

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

gui.add(GUIValues, 'pauseRotation').name('Pause Rotation');
gui.add(GUIValues, 'sunIntensity', 1, 10).name('Sun Intensity');
gui.addColor(GUIValues, 'earthSpecular').name("Earth's Specularity");
gui.add(GUIValues, 'earthShininess', 1, 1000).name("Earth's Shininess");
gui.add(GUIValues, 'ambientIntensity', 0.1, 1).name("Ambient Light Intensity");

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

    sunLight.intensity = GUIValues.sunIntensity;
    spaceBaseLight.intensity = GUIValues.ambientIntensity;

    if( !GUIValues.pauseRotation ){
        planets.forEach(planet => {
            planet.rotation.y = time;
        });
    }
        

    controls.update();
        
    // Render the scene
    renderer.render(scene, camera);
};

requestAnimationFrame( render );