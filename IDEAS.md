What
------

* done last time:
    * earth following orbit ✓
    * earth orbiting sun speed != sun rotation speed by using time*= value in render function
    * add Moon (check out tutorial below)
    * finish scenegraph tutorial https://r105.threejsfundamentals.org/threejs/lessons/threejs-scenegraph.html ) 
    * changed relative to general paths for modules "../node_modules/three/..." -> "three" or "three/..."
    * added three.d.ts files for all modules, installed types package from @types/three which will be auto included if path resolution is general and not relative. This means three js is available as three.ts which means there is now proper code suggestion and completion. Hurray 
      also added index.d.ts declaration file to the assets/ which declares the *.jpg files as modules so ts is not complaining when importing images
    * finally added texture to earth. Added rotation, sun/ambient light intensities to gui and also earth's specular and shininess but I can't update it's value changed by the gui in the render method since it complaints about earth's material not having a shininess and specular value though it has

* last update: tried to add Orbits but the rings are not drawn
* next:
    * textures  https://r105.threejsfundamentals.org/threejs/lessons/threejs-textures.html
        

* ideas:
    * sun glowing              /
    * typical sun light rays  O
                             /
    * shader/bump map to create sun like surface 
                             