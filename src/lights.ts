import { PointLight } from "../node_modules/three/src/lights/PointLight.js";
import { Vector3 } from "../node_modules/three/src/math/Vector3.js";
import { SphereGeometry } from "../node_modules/three/src/geometries/SphereGeometry.js";
import { MeshBasicMaterial } from "../node_modules/three/src/materials/MeshBasicMaterial.js";
import { MeshPhongMaterial } from "../node_modules/three/src/materials/MeshPhongMaterial.js";
import { Mesh } from "../node_modules/three/src/objects/Mesh.js";
import { AmbientLight } from "../node_modules/three/src/lights/AmbientLight.js";
import { HemisphereLight } from "../node_modules/three/src/lights/HemisphereLight.js";
import { Scene } from "../node_modules/three/src/scenes/Scene.js";

export let pointLightColor = 0x0000ff;
export let pointLightPosition = new Vector3(10 , 15 , 0 );
export let pointLightDim = new Vector3(1, 32, 16)


export let ambientIntesitiy = 0.2;
export let ambientColor = 0xFFFFFF;

export let hemisphereIntensity = 1;
export let skyColor = "#93adff";
export let groundColor = "#ff001e";

export function addPointLight( scene: Scene ): [PointLight, Mesh]{

    const pointLight: PointLight = new PointLight( pointLightColor, 1000, 0 );

    const sphereGeometry = new SphereGeometry(
        pointLightDim.x, 
        pointLightDim.y, 
        pointLightDim.z
        );

    const sphereMaterial = new MeshBasicMaterial({color: pointLightColor});
    const sphere = new Mesh( sphereGeometry, sphereMaterial );

    pointLight.position.set(
        pointLightPosition.x, 
        pointLightPosition.y, 
        pointLightPosition.z
    );

    sphere.position.set(
        pointLightPosition.x,   
        pointLightPosition.y,
        pointLightPosition.z
    );

    scene.add(sphere);
    scene.add(pointLight);

    return [pointLight, sphere];
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

export let sunIntensity = 10000;
export let sunLightColor = "#FFFF99";
export let sunColor = "#FF9900";
export let sunDim = new Vector3(5, 64, 32);
export let sunPos = new Vector3(0 , 0 , 0 );

export function addSun(scene): [PointLight, Mesh]{

    const pointLight: PointLight = new PointLight( pointLightColor, sunIntensity, 0 );
    const sphereGeometry = new SphereGeometry(sunDim.x, sunDim.y, sunDim.z);
    const sphereMaterial = new MeshPhongMaterial({emissive: sunColor});
    const sphere = new Mesh( sphereGeometry, sphereMaterial );

    pointLight.position.set(
        sunPos.x, 
        sunPos.y, 
        sunPos.z
    );

    sphere.position.set(
        sunPos.x,   
        sunPos.y,
        sunPos.z
    );

    scene.add(sphere);
    scene.add(pointLight);

    return sphere;
}
