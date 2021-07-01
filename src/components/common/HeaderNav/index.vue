<template>
  <b-navbar :class="[{ 'white-navigation': whiteNav }, { 'header_navigation' : true }]">
    <div :class="[menuActive ? 'menu-active' : '', 'header_navigation-inner w-100 align-items-center justify-content-start d-flex h-100 w-100']">

      <a  v-if="windowWidth < 1200 && isSublinksShown" href="#" @click.prevent="handleGoNavBack" class="color-white nav-mob-back">
        <font-awesome-icon :icon="['fas','arrow-left']" size="lg" />
      </a>

      <!-- Affiliate logo -->
      <router-link :to="{ name: 'home' }" class="hp-home-logo">
       <template v-if="!whiteNav">
          <b-img class="logo-white" height="35" :src="require('@images/affiliate/aff_logo_white.png')" alt="Affi Builder"></b-img>
       </template>
       <template v-else>
          <b-img class="logo-blue" height="auto" width="150" :src="require('@images/affiliate/aff_logo.png')" alt="Affi Builder"></b-img>
       </template>
      </router-link>

      <!-- menu @desktop -->
      <template v-if="windowWidth > 1200">
        <!-- Menu List -->
        <menu-list :whiteNav="whiteNav" />
        <div class="right-content d-flex align-items-center">
          <Button variant="outline" label="login" :click="() => this.$router.push({ name: 'login' })"/>
        </div>
      </template>

      <!-- menu @mobile -->
      <button v-else :class="[{ 'is-active' : menuActive }, 'hamburger hamburger--slider']" type="button" @click.stop="toggleMenu">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </b-navbar>
</template>

<script>
  import Button from '@components/common/FormElements/Button'
  import MenuList from './MenuList'
  export default {
    props: {
      whiteNav: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        menuActive: false,
        isSublinksShown: false
      }
    },
    components: { MenuList, Button },
    methods: {
      toggleMenu() {
        this.menuActive = !this.menuActive
        this.$EventBus.$emit('toggleMobileNav', this.menuActive)
        this.isSublinksShown = false
      },
      handleSublinks() {
        this.isSublinksShown = true
      },
      handleGoNavBack() {
        this.isSublinksShown = false
        this.$EventBus.$emit('subLinkGoBack')
      },
      handleCloseMobileNav() {
        this.isSublinksShown = false
        this.menuActive = false
      }
    },
    computed: {
      windowWidth() {
          return this.$store.getters['app/GET_WINDOW_WIDTH']
      }
    },
    created() {
      this.$EventBus.$on('subLinksNavEnabled', this.handleSublinks)
      this.$EventBus.$on('closeMobileNav', this.handleCloseMobileNav)
    },
    beforeDestroy() {
      this.$EventBus.$off('subLinksNavEnabled', this.handleSublinks)
      this.$EventBus.$off('closeMobileNav', this.handleCloseMobileNav)
    }
  }
</script>
