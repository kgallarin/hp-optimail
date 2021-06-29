<template>
  <div id="app" class="h-100" style="min-height: 100vh;">
    <component :is="layout" v-if="layout">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const requireContext = require.context(
  '@components/layouts',
  false,
  /.*\.vue$/
)

const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  name: 'app',
  computed: {
    layout() {
      return layouts[this.$route.meta.layout || 'default']
    }
  },
  methods: {
    setInnerWidthEvent() {
      this.$store.commit('app/SET_WINDOW_WIDTH', window.innerWidth)
    },
    setInnerHeightEvent() {
      this.$store.commit('app/SET_WINDOW_HEIGHT', window.innerHeight)
    }
  },
  created() {
    window.addEventListener('resize', this.setInnerWidthEvent)
    window.addEventListener('resize', this.setInnerHeightEvent)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setInnerWidthEvent)
    window.removeEventListener('resize', this.setInnerHeightEvent)
  }
};
</script>

<style lang="scss">
  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }

  .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>