import * as dat from "../node_modules/dat.gui/build/dat.gui.module.js";
var gui = new dat.GUI({ name: 'THREE GUI' });
var camerasGUI = {
    camObserve: {
        position: {
            x: 60,
            y: 60,
            z: 60
        },
        fov: 50,
        near: 150,
        far: 1000
    },
    camRenderZ: 150
};
gui.add(camerasGUI.camObserve.position, "x", -200, 200);
gui.add(camerasGUI.camObserve.position, "y", -200, 200);
gui.add(camerasGUI.camObserve.position, "z", -200, 200);
gui.add(camerasGUI.camObserve, "fov", 5, 100);
gui.add(camerasGUI.camObserve, "near", 0, 200);
gui.add(camerasGUI.camObserve, "far", 200, 1000);
gui.add(camerasGUI, "camRenderZ", 0, 2000);
export { camerasGUI };
