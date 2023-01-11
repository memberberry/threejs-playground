import { BoxGeometry } from "../node_modules/three/src/geometries/BoxGeometry.js";
import { MeshPhongMaterial } from "../node_modules/three/src/materials/MeshPhongMaterial.js";
import { Mesh } from "../node_modules/three/src/objects/Mesh.js";
import { Vector3 } from "../node_modules/three/src/math/Vector3.js";

export let cubeColor = "#FFFFFF";
export let cubeSize = new Vector3(1, 1, 1);

export function addCube(scene){

    const geometry: BoxGeometry = new BoxGeometry( cubeSize.x, cubeSize.y, cubeSize.z );
    const material: MeshPhongMaterial = new MeshPhongMaterial( {color: cubeColor} );    
    const cube: Mesh = new Mesh( geometry, material );
    scene.add( cube );
    return cube;
    
}