import * as Three from './three.module.js'

export default {
    install(vue, opt){
      vue.prototype.$THREE = Three
      vue.prototype.$scene = new Three.Scene()
      vue.prototype.$renderer = new Three.WebGLRenderer({ antialias: true})
      vue.prototype.$camera = new Three.PerspectiveCamera()

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
            canvas: null
          }
        },
        mounted() {
          this.createRenderer()
        },
        methods: {
          createRenderer() {
            this.$renderer.setSize( this.$refs.ctx.clientWidth, this.$refs.ctx.clientHeight )
            this.$refs.ctx.appendChild( this.$renderer.domElement )
          },
        }

      })
    }
}
