<template>
  <div class="default-layout h-100">
    <alert-notif />
    <header-nav white-nav :class="{'sticky-nav': stickyNav}" id="main_nav" ref="main_nav" />
      <slot />
    <Footer />

    <!-- mobile menu -->
    <mobile-nav
      :isVisible="visbleMobileMenu"
      class="white-menu"
      v-if="visbleMobileMenu && windowWidth < 1200"
    />
  </div>
</template>

<script>
import HeaderNav from '@components/common/HeaderNav'
import MobileNav from '@components/common/HeaderNav/MobileNav'
import Footer from '@components/common/Footer'
import  AlertNotif from '@components/common/AlertNotif'

export default {
  name: '',
  components: {
    HeaderNav,
    MobileNav,
    Footer,
    AlertNotif
  },
  data() {
    return {
      visbleMobileMenu: false,
    }
  },
  methods: {
    handleMobileNav(data) {
      this.visbleMobileMenu = data
    },
    handleCloseMobileNav() {
      this.visbleMobileMenu = false
    },
    handleScroll(e) {
      const headerNav = this.$refs.main_nav.$el.offsetTop
      let docElScrollPosition = e.target.scrollingElement.scrollTop
      if(docElScrollPosition > headerNav + 30) {
        this.$store.commit('app/SET_STICKY_NAV', true)
      }else {
        this.$store.commit('app/SET_STICKY_NAV', false)
      }
    }
  },
  computed: {
    windowWidth() {
      return this.$store.getters['app/GET_WINDOW_WIDTH']
    },
    stickyNav() {
      return this.$store.getters['app/GET_STICKY_NAV']
    }
  },
  created() {
    this.$EventBus.$on('toggleMobileNav', this.handleMobileNav)
    this.$EventBus.$on('closeMobileNav', this.handleCloseMobileNav)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    this.$EventBus.$off('toggleMobileNav', this.handleMobileNav)
    this.$EventBus.$off('closeMobileNav', this.handleCloseMobileNav)
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>
