<template>
  <li :id="`nav-${data.label}`"
    class="menu-item position-relative"
    @mouseenter="setCurrentHover(`nav-${data.label}`)"
    @mouseleave="setCurrentHover(null) "
  >
    <a href="#"
      :class="[{'active': isHoveredNav(`nav-${data.label}`)}, { 'main-links': true}]"
      @click.prevent.stop="[data.component_link ? click(data.component_link) : '']"
    >
      {{ data.label }}
    </a>

    <sub-navigation :data="data"
      @mouseLeft="setCurrentHover(null)"
      v-show="
        isHoveredNav(`nav-${data.label}`) &&
        data.sub_links.length > 0 &&
        windowWidth > 1200
      "
      />

  </li>
</template>

<script>
  import SubNavigation from './SubNavigation'
  export default {
    name: 'MenuItem',
    props: {
      data: {
        type: Object,
        default: ()=> {}
      },
      click: {
        type: Function,
        default: () => {}
      },
      activeHovered: {
        type: String,
        default: ''
      }
    },
    methods: {
      setCurrentHover(id){
        this.$emit('currentlyHovered', id)
      },
      isHoveredNav(id) {
        return this.activeHovered === id
      }
    },
    components: {
      SubNavigation
    },
    computed: {
      windowWidth() {
        return this.$store.getters['app/GET_WINDOW_WIDTH']
      }
    }
  }
</script>
