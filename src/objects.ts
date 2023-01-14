import { BoxGeometry } from "../node_modules/three/src/geometries/BoxGeometry.js";
import { SphereGeometry } from "../node_modules/three/src/geometries/SphereGeometry.js";
import { RingGeometry } from '../node_modules/three/src/geometries/RingGeometry.js';
import { MeshPhongMaterial } from "../node_modules/three/src/materials/MeshPhongMaterial.js";
import { MeshBasicMaterial } from "../node_modules/three/src/materials/MeshBasicMaterial.js";
import { Mesh } from "../node_modules/three/src/objects/Mesh.js";
import { Vector3 } from "../node_modules/three/src/math/Vector3.js";
import { DoubleSide } from '../node_modules/three/src/constants.js';


export let cubeColor = "#00FF00";
export let cubeSize = new Vector3( 1 , 1 , 1 );


export function addCube(scene){
    
    const geometry: BoxGeometry = new BoxGeometry( cubeSize.x, cubeSize.y, cubeSize.z );
    const material: MeshPhongMaterial = new MeshPhongMaterial( {color: cubeColor} );    
    const cube: Mesh = new Mesh( geometry, material );
    scene.add( cube );
    return cube;
    
}

export let earthDim = new Vector3(1, 32, 16);
export let earthColor = '#0000FF'

export function addEarth(scene): Mesh{

    const geometry: SphereGeometry = new SphereGeometry( earthDim.x, earthDim.y, earthDim.z );
    const material: MeshPhongMaterial = new MeshPhongMaterial( {color: earthColor, shininess: 20, specular: 0x050505} );

    const earth: Mesh = new Mesh( geometry, material );

    //scene.add( earth );
    return earth;

}

export let moonDim = new Vector3(0.3, 16, 8);
export let moonColor = 0x888888

export function addMoon(scene): Mesh{

    const geometry: SphereGeometry = new SphereGeometry( moonDim.x, moonDim.y, moonDim.z );
    const material: MeshPhongMaterial = new MeshPhongMaterial( {color: moonColor, shininess: 5, specular: 0x050505} );

    const moon: Mesh = new Mesh( geometry, material );

    return moon;
    
}

/**
 * @param innerRadius {Number} 
 * @param thetaSegments {Number} 
 * @param thetaLength {Number} determines if circles is closed or just a part of a circle
 * @param color {Hex}
 */

export function addOrbitalRing( innerRadius, thetaSegments, thetaLength, color ): Mesh{

    const geometry: RingGeometry = new RingGeometry(
        innerRadius, 
        innerRadius + 0.1, 
        thetaSegments, 1, 0,  
        thetaLength= thetaLength);

    const material: MeshBasicMaterial = new MeshBasicMaterial( {color: color, side: DoubleSide} );
    const orbit: Mesh = new Mesh( geometry, material );
    orbit.rotateOnAxis( new Vector3(1,0,0), Math.PI/2 );

    return orbit;

};


