# Vue-Cubed

### Synopsis

This plug-in is intended to streamline 3D Vue.js projects by creating and manipulating one renderer increasing speeds. It also has a full module system for Three.js which it uses to render scenes.

## Install to your Vue project
```
npm i vue-cubed
```

### Initiate at the start of your project
(in main.js)
```
import VueCubed from 'vue-cubed'


Vue.use(VueCubed)
```

### How to use


Vue-cubed uses a custom component called "VueScene" it can be added to any template like so.
```
<VueScene/>
```
This creates an empty canvas element within the rendered scene and assigns it to the component its in, inheriting any style property.

Vue-cubed creates global variables, this is done to prevent multiple renderers being created and destroyed which frees up memory.
```
this.$THREE (gives you acsess to the Three.js modules use it like you would use THREE in normal Three.js applications)
this.$scene (the global scene that will be switched between components)
this.$camera (the global camera)
this.$render() (the global rendering call. Calling it will call this.$renderer.render(this.$scene, this.$camera) you must put this in the component to work)
this.$renderer (the global renderer)
```
From here on in you can create objects and manipulate the scene as you please.

## More info
[npm package](https://www.npmjs.com/package/vue-cubed)

[Repository](https://github.com/404-kid/vue-cubed-src)

[Website(under construction)](http://vue-cubed.com/)

This npm package uses Three.js please check out some of their [examples](https://threejs.org/)


### TODO
Create obj registry for object pooling to reduce scene switching load times.

Create animation manager.
