import { PointLight } from "../node_modules/three/src/lights/PointLight.js";
import { Vector3 } from "../node_modules/three/src/math/Vector3.js";
import { SphereGeometry } from "../node_modules/three/src/geometries/SphereGeometry.js";
import { MeshBasicMaterial } from "../node_modules/three/src/materials/MeshBasicMaterial.js";
import { MeshPhongMaterial } from "../node_modules/three/src/materials/MeshPhongMaterial.js";
import { Mesh } from "../node_modules/three/src/objects/Mesh.js";
import { AmbientLight } from "../node_modules/three/src/lights/AmbientLight.js";
import { HemisphereLight } from "../node_modules/three/src/lights/HemisphereLight.js";
import { Scene } from "../node_modules/three/src/scenes/Scene.js";
import { SCALE } from "./main";


export let pointLightColor = 0x0000ff;
export let pointLightPosition = new Vector3(10 , 15 , 0 );
export let pointLightDim = new Vector3(1, 32, 16)


export let ambientIntesitiy = 0.2;
export let ambientColor = 0xFFFFFF;

export let hemisphereIntensity = 1;
export let skyColor = "#93adff";
export let groundColor = "#ff001e";

export let sunIntensity = 100;
export let sunLightColor = "#FFFF99";
export let sunColor = "#FF9900";
export let sunDim = new Vector3(5, 12, 6);
export let sunPos = new Vector3(0 , 0 , 0 );

export function addPointLight( scene: Scene ): PointLight{

    const pointLight: PointLight = new PointLight( sunLightColor, sunIntensity, 0 );
    pointLight.position.set(
        sunPos.x, 
        sunPos.y, 
        sunPos.z
    );
    scene.add(pointLight);
    return PointLight;
}

export function addAmbientLight( scene: Scene ): AmbientLight{

    const ambientLight: AmbientLight = new AmbientLight( ambientColor, ambientIntesitiy );
    scene.add( ambientLight );
    return ambientLight;
}


export function addHemisphereLight( scene: Scene ): HemisphereLight{

    const hemisphereLight = new HemisphereLight( skyColor, groundColor, hemisphereIntensity ); 
    scene.add( hemisphereLight );
    return hemisphereLight;

}


export function addSun(scene): Mesh{

    const sphereGeometry = new SphereGeometry(sunDim.x, sunDim.y, sunDim.z);
    const sphereMaterial = new MeshPhongMaterial({emissive: sunColor});
    const sphere = new Mesh( sphereGeometry, sphereMaterial );
    

    sphere.position.set(
        sunPos.x,   
        sunPos.y,
        sunPos.z
    );

    scene.add(sphere);

    return sphere;
}
