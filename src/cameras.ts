import { PerspectiveCamera } from "../node_modules/three/src/cameras/PerspectiveCamera.js";
import { Vector3 } from "../node_modules/three/src/math/Vector3.js";

export let fov: number  = 105;
export let near: number = 0.1;
export let far: number  = 1000;
export let aspect: number = window.innerWidth/window.innerHeight;
export let cameraPos: Vector3 = new Vector3(0, 5, 10);


export function getPerspectiveCamera(): PerspectiveCamera{

    var camera: PerspectiveCamera = new PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( cameraPos.x, cameraPos.y, cameraPos.z );
    return camera;
    
}
