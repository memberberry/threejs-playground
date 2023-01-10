import { PerspectiveCamera } from "../node_modules/three/src/cameras/PerspectiveCamera.js";

export let fov: number  = 105;
export let near: number = 0.1;
export let far: number  = 1000;
export let aspect: number = window.innerWidth/window.innerHeight;


export function getPerspectiveCamera(): PerspectiveCamera{
    var camera: PerspectiveCamera = new PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 5, 10);
    return camera;
}
