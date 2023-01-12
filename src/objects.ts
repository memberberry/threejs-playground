import { BoxGeometry } from "../node_modules/three/src/geometries/BoxGeometry.js";
import { MeshPhongMaterial } from "../node_modules/three/src/materials/MeshPhongMaterial.js";
import { SphereGeometry } from "../node_modules/three/src/geometries/SphereGeometry.js";
import { Mesh } from "../node_modules/three/src/objects/Mesh.js";
import { Vector3 } from "../node_modules/three/src/math/Vector3.js";

export let cubeColor = "#00FF00";
export let cubeSize = new Vector3(1, 1, 1);

export let earthDim = new Vector3(5, 32, 16);
export let earthColor = '#0000FF'

export function addCube(scene){

    const geometry: BoxGeometry = new BoxGeometry( cubeSize.x, cubeSize.y, cubeSize.z );
    const material: MeshPhongMaterial = new MeshPhongMaterial( {color: cubeColor} );    
    const cube: Mesh = new Mesh( geometry, material );
    scene.add( cube );
    return cube;
    
}

/*
export function addEarth(scene): Mesh{
    const geometry: SphereGeometry = new SphereGeometry( earthDim.x, earthDim.y, earthDim.x );
    const material: MeshPhongMaterial = new MeshPhongMaterial( {color: earthColor} )
}
*/