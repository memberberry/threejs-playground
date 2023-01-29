import * as dat from 'dat.gui';
import { sunIntensity } from './lights';
import { earthSpecular } from './objects';
import { earthShininess } from './objects';
export interface customGUI {
    pauseRotation: Boolean,
    sunIntensity: number,
    ambientIntensity: number,
    earthSpecular: number,
    earthShininess: number
}

interface extraValues{
    one: number,
    two: number,
    three: number
}

export function initGUI(){
    const gui = new dat.GUI();
    
    const GUIValues: customGUI = {
        pauseRotation : false,
        sunIntensity,
        ambientIntensity: 0.1,
        earthSpecular,
        earthShininess
    }

    const extras: extraValues = {
        one: 1,
        two: 2,
        three: 3
    }

    gui.add(GUIValues, 'pauseRotation').name('Pause Rotation');
    gui.add(GUIValues, 'sunIntensity', 1, 10).name('Sun Intensity');
    gui.addColor(GUIValues, 'earthSpecular').name("Earth's Specularity");
    gui.add(GUIValues, 'earthShininess', 1, 1000).name("Earth's Shininess");
    gui.add(GUIValues, 'ambientIntensity', 0.1, 1).name("Ambient Light Intensity");

    (<customGUI>gui.values) = GUIValues;
    
    return gui;
}