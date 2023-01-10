import { PointLight } from "../node_modules/three/src/lights/PointLight.js";
import { Vector3 } from "../node_modules/three/src/math/Vector3.js";
import { SphereGeometry } from "../node_modules/three/src/geometries/SphereGeometry.js";
import { MeshBasicMaterial } from "../node_modules/three/src/materials/MeshBasicMaterial.js";
import { Mesh } from "../node_modules/three/src/objects/Mesh.js";

export let pointLightColor = 0xffffff;
export let pointLightPosition = new Vector3(0, 15, 0);
export let sphereRadius = 1;
export let sphereTilesHoriz = 32;
export let sphereTilesVert = 16;

export function addPointLight(scene): void{

    const pointLight: PointLight = new PointLight( 0xFFFFFF, 1000, 0 );
    const sphereGeometry = new SphereGeometry(sphereRadius, sphereTilesHoriz, sphereTilesVert);
    const sphereMaterial = new MeshBasicMaterial({color: "#FFFFFF"});
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
    )

    scene.add(sphere);
    scene.add(pointLight);
}