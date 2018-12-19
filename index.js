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
          }
        }

      })
    }
}
