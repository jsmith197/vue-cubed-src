import * as Three from './three.module.js'

export default {
    install(vue, opt){
      vue.prototype.$THREE = Three
      vue.prototype.$scene = new Three.Scene()
      vue.prototype.$renderer = new Three.WebGLRenderer({ antialias: true})
      vue.prototype.$camera = new Three.PerspectiveCamera()

      vue.prototype.$render = function () {
        return this.$renderer.render(this.$scene, this.$camera)
      }

      vue.component('VueScene', {
        render: function (createElement) {
          return createElement('div',
          {
            ref: 'ctx'
          }
          )
        },
        data: function () {
          return {
          }
        },
        mounted() {
          this.createRenderer()
          this.animate()
        },
        beforeDestroy() {
          this.clearScene()
        },
        methods: {
          createRenderer() {
            this.$renderer.setSize( this.$refs.ctx.clientWidth, this.$refs.ctx.clientHeight )
            this.$refs.ctx.appendChild( this.$renderer.domElement )
          },
          clearScene() {
            this.$scene.remove.apply(this.$scene, this.$scene.children);
          },
          animate(){
            requestAnimationFrame( this.animate )
            this.$render()
          }
        },
      })

      vue.component('Cone', {
        name: "cone",
        props: {
          color: {
            type: String,
            default: "rgba(250,250,250,1)"
          },
          height: {
            type: Number,
            default: 5
          },
          radius: {
            type: Number,
            default: 3
          },
          segments:{
            type: Number,
            default: 30
          },
          position: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          },
          cone: {
            type: Object,
            default() {
              return{ 
                val: {}
              }
            }
          },
          rotation: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          }
        },
          data() {
          return {
          }
        },
        mounted() {
          this.init()
        },
        methods: {
          init() {
            let geometry = new this.$THREE.ConeBufferGeometry( this.radius, this.height, this.segments )
            let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
            this.cone.val = new this.$THREE.Mesh( geometry, material )
            this.cone.val.rotation.x += this.rotation.x
            this.cone.val.rotation.y += this.rotation.y
            this.cone.val.rotation.z += this.rotation.z
            this.cone.val.position.x += this.position.x
            this.cone.val.position.y += this.position.y
            this.cone.val.position.z += this.position.z
            this.$scene.add( this.cone.val )
          },
        }
      })

      vue.component('Cube', {
        render: function (createElement) {
          return createElement('div')
        },
        name: "cube",
        data: function () {
          return {
          }
        },
        props: {
          color: {
            type: String,
            default: "rgba(250,250,250,1)"
          },
          size: {
            type: Object,
            default() {
              return{
                w: 5,
                h: 5,
                d: 5
              }
            }
          },
          position: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          },
          cube: {
            type: Object,
            default() {
              return{ 
                val: {}
              }
            }
          },
          rotation: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          }
        },
        mounted() {
          this.init()
        },
        methods: {
          init() {
            let geometry = new this.$THREE.CubeGeometry(this.size.w,this.size.h,this.size.d)
            let cubeMat = new this.$THREE.MeshPhysicalMaterial({color: this.color, emissive:this.color, reflectivity: .5, metalness: .5})
            this.cube.val = new this.$THREE.Mesh(geometry, cubeMat)
            this.cube.val.rotation.x += this.rotation.x
            this.cube.val.rotation.y += this.rotation.y
            this.cube.val.rotation.z += this.rotation.z
            this.cube.val.position.x += this.position.x
            this.cube.val.position.y += this.position.y
            this.cube.val.position.z += this.position.z
            this.$scene.add(this.cube.val)
          },
        },
      })
      vue.component('Cylinder', {
        render: function (createElement) {
          return createElement('div')
        },

        name: "cylinder",
        props: {
          color: {
          type: String,
          default: "rgba(250,250,250,1)"
          },
          height: {
            type: Number,
            default: 10
          },
          radius: {
            type: Object,
            default() {
              return{
               top: 2,
               bot: 2
              }
            }
          },
          segments:{
            type: Number,
            default: 20
          },
          position: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          },
          cylinder: {
            type: Object,
            default() {
              return{ 
                val: {}
              }
            }
          },
          rotation: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          }
        },
          data() {
          return {
          }
        },
        mounted() {
          this.init()
        },
        methods: {
          init() {
            let geometry = new this.$THREE.CylinderGeometry( this.radius.top, this.radius.bot, this.height, this.segments )
            let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
            this.cylinder.val = new this.$THREE.Mesh( geometry, material )
            this.cylinder.val.rotation.x += this.rotation.x
            this.cylinder.val.rotation.y += this.rotation.y
            this.cylinder.val.rotation.z += this.rotation.z
            this.cylinder.val.position.x += this.position.x
            this.cylinder.val.position.y += this.position.y
            this.cylinder.val.position.z += this.position.z
            this.$scene.add( this.cylinder.val )
          },
        }
      })
      vue.component('Sphere', {
        render: function (createElement) {
          return createElement('div')
        },
        name: "sphere",
        props: {
          color: {
            type: String,
            default: "rgba(250,250,250,1)"
          },
          radius: {
            type: Number,
            default: 5
          },
          segments:{
            type: Object,
            default() {
              return{
                w: 16,
                h: 16
              }
            }
          },
          position: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          },
          sphere: {
            type: Object,
            default() {
              return{ 
                val: {}
              }
            }
          },
          rotation: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          }
        },
          data() {
          return {
          }
        },
        mounted() {
          this.init()
        },
        methods: {
          init() {
            let geometry = new this.$THREE.SphereGeometry( this.radius, this.segments.w, this.segments.h )
            let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
            this.sphere.val = new this.$THREE.Mesh( geometry, material )
            this.sphere.val.rotation.x += this.rotation.x
            this.sphere.val.rotation.y += this.rotation.y
            this.sphere.val.rotation.z += this.rotation.z
            this.sphere.val.position.x += this.position.x
            this.sphere.val.position.y += this.position.y
            this.sphere.val.position.z += this.position.z
            this.$scene.add( this.sphere.val )
          },
        }
      })
      vue.component('Torus', {
        render: function (createElement) {
          return createElement('div')
        },
        name: "torus",
        props: {
          color: {
            type: String,
            default: "rgba(250,250,250,1)"
          },
          radius: {
            type: Number,
            default: 3
          },
          tube: {
            type: Number,
            default: 1
          },
          segments:{
            type: Object,
            default() {
              return{
                rad: 18,
                tub: 20
              }
            }
          },
          position: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          },
          torus: {
            type: Object,
            default() {
              return{ 
                val: {}
              }
            }
          },
          rotation: {
            type: Object,
            default() {
              return{
                x: 0,
                y: 0,
                z: 0
              }
            }
          }
        },
          data() {
          return {
          }
        },
        mounted() {
          this.init()
        },
        methods: {
          init() {
            let geometry = new this.$THREE.TorusGeometry( this.radius, this.tube, this.segments.rad, this.segments.tub )
            let material = new this.$THREE.MeshPhysicalMaterial( {color: this.color, emissive:this.color, reflectivity: .5, metalness: .5} )
            this.torus.val = new this.$THREE.Mesh( geometry, material )
            this.torus.val.rotation.x += this.rotation.x
            this.torus.val.rotation.y += this.rotation.y
            this.torus.val.rotation.z += this.rotation.z
            this.torus.val.position.x += this.position.x
            this.torus.val.position.y += this.position.y
            this.torus.val.position.z += this.position.z
            this.$scene.add( this.torus.val )
          },
        }
      })
    }
}
