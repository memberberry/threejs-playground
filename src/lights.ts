import { PointLight }           from "three/src/lights/PointLight";
import { Vector3 }              from "three/src/math/Vector3";
import { SphereGeometry }       from "three/src/geometries/SphereGeometry";
import { MeshBasicMaterial }    from "three/src/materials/MeshBasicMaterial";
import { MeshPhongMaterial }    from "three/src/materials/MeshPhongMaterial";
import { ShaderMaterial }       from "three/src/materials/ShaderMaterial";
import { Mesh }                 from "three/src/objects/Mesh";
import { AmbientLight }         from "three/src/lights/AmbientLight";
import { HemisphereLight }      from "three/src/lights/HemisphereLight";
import { Scene }                from "three/src/scenes/Scene";


export let pointLightColor = 0x0000ff;
export let pointLightPosition = new Vector3(10 , 15 , 0 );
export let pointLightDim = new Vector3(1, 32, 16)


export let ambientIntesitiy = 0.3;
export let ambientColor = 0xFFFFFF;

export let hemisphereIntensity = 1;
export let skyColor = "#93adff";
export let groundColor = "#ff001e";

export let sunIntensity = 2.5;
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
    return pointLight;
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
    
    /*
    const shaderMaterial = new ShaderMaterial( {

        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent

    } );
    */
    const sphereGeometry: SphereGeometry = new SphereGeometry(sunDim.x, sunDim.y, sunDim.z);
    const sphereMaterial: MeshPhongMaterial = new MeshPhongMaterial({emissive: sunColor});
    const sphere = new Mesh( sphereGeometry, sphereMaterial );
    

    sphere.position.set(
        sunPos.x,   
        sunPos.y,
        sunPos.z
    );

    scene.add(sphere);

    return sphere;
}
