What
------

* done last time:
    * earth following orbit ✓
    * earth orbiting sun speed != sun rotation speed by using time*= value in render function
    * add Moon (check out tutorial below)
    * finish scenegraph tutorial https://r105.threejsfundamentals.org/threejs/lessons/threejs-scenegraph.html ) 
    * changed relative to general paths for modules "../node_modules/three/..." -> "three" or "three/..."
    * added three.d.ts files for all modules, installed types package from @types/three which will be auto included if path resolution
      is general and not relative. This means three js is available as three.ts which means there is now proper code suggestion and     completion. Hurray 
      also added index.d.ts declaration file to the assets/ which declares the *.jpg files as modules so ts is not complaining when importing images
    * finally added texture to earth. Added rotation, sun/ambient light intensities to gui and also earth's specular and shininess but 
      I can't update it's value changed by the gui in the render method since it complaints about earth's material not having a shininess and specular value though it has
    * Fixed issue with earth.material.shininess by adding (<THREE.MeshPhongMaterial>earth.material).shininess also (earth.material as  
      THREE.MeshPhongMaterial).shininess works.
      Also outsourced gui into it's own file and created an interface to extend the gui class by a custom property. Wasn't necessary but useful to know how to extend an existing class in Typescript by custom properties. Had to create an interface and add that interface in a new declaration file: custom.d.ts
      Also added Lava shader: https://threejs.org/examples/?q=lava#webgl_shader_lava to sun
      Had to Adjust it to make it work, !important I have changed in fragment shader: depth = gl_FragCoord.z / gl_FragCoord.w to only:
      depth = gl_FragCoord.z 
      
    

* last update: tried to add Orbits but the rings are not drawn
* next:
    * easy shader tutorial: https://www.youtube.com/watch?v=EntBBM6nqQA -> go deeper 
    * checkout light flares: https://threejs.org/examples/#webgl_lensflares
    * checkout bump maps to create more depth for sun/ or light sunrays from the bright spots check out: "sun images" on google images
    * skyboxes
    * create orbiting tails
    * there is easy physics with cannon-es: https://www.youtube.com/watch?v=Ht1JzJ6kB7g


* ideas:
    * sun glowing              /
    * typical sun light rays  O
                             /
    * shader/bump map to create sun like surface 
    * commets
    * maybe visualize the friction objects have because of fast speed when zooming in more. Maybe for this create a sticky camera to the objects for example a sticky orbitcontrol when clicking on a planet
    * add music
    * make the planets more detailed when zooming in
                             

* inspirations:
    * https://threejs.org/examples/#webgl_lights_rectarealight
    * https://threejs.org/examples/#webgl_lights_spotlight
    * https://threejs.org/examples/#webgl_lights_physical
    * https://threejs.org/examples/#webgl_instancing_scatter
    * https://threejs.org/examples/#webgl_loader_usdz


Text on main page showcasing my project:
* This Project took me X months to develop. I tried to dedicate each day half an hour to have consistent progress.
  Considering I had to work 4 Days a week plus my Bachelor Thesis sticking to my Neck I am very proud on that accomplishment.
  It was the first private Project I really stuck too and not change course or work on newer "better" ideas passing by. At least for such a long period of time with so little time available for it in my week. 