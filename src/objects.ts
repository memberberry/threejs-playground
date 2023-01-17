import { BoxGeometry } from "three/src/geometries/BoxGeometry";
import { SphereGeometry } from "three/src/geometries/SphereGeometry";
import { RingGeometry } from 'three/src/geometries/RingGeometry';
import { MeshPhongMaterial } from "three/src/materials/MeshPhongMaterial";
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial";
import { Mesh } from "three/src/objects/Mesh";
import { Vector3 } from "three/src/math/Vector3";
import { DoubleSide } from 'three/src/constants';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
//import texture from './assets/earth_texture_map.jpg';

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
    //const textureLoader = new TextureLoader();
    //const texture = textureLoader.load("../assets/earth_texture_map.jpg");
    const geometry: SphereGeometry = new SphereGeometry( earthDim.x, earthDim.y, earthDim.z );
    // shininess erzeugt einen großen fleck in der Farbe die bei specular gesetzt ist.
    // dieser Fleck ist immer Sichtbar von jedem Winkel 
    // und er erzeugt in mitten dieses Flecks einen weißen Punkt der dann in Richtung Licht leutet oder eben nicht da ist
    // verstehe das konzept nicht
    const material: MeshPhongMaterial = new MeshPhongMaterial( {color: 0x000000, specular: 0x0000ff, shininess: 10} );

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


