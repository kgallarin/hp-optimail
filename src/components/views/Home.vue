<template>
  <div :class="[{'sticky-nav': stickyNav }, {'homepage-wrapper': true}]">

    <!-- section 1 -->
    <landing-hero />

    <!-- section 2 -->
    <learn-more/>

    <!-- section 3 -->
    <move-money/>

    <!-- section 4 -->
    <brands />

    <!-- section 5 -->
    <payments/>

    <!-- section 6 -->
    <about-us/>

     <!-- section 7 -->
     <getting-started/>

  </div>
</template>

<script>
import LandingHero from '@components/partials/home/LandingHero'
import MoveMoney from '@components/partials/home/MoveMoney'
import LearnMore from '@components/partials/home/LearnMore'
import Brands from '@components/partials/home/Brands'
import Payments from '@components/partials/home/Payments'
import AboutUs from '@components/partials/home/AboutUs'
import GettingStarted from '@components/partials/home/GettingStarted'

export default {
  name: "Home",
  props: {},
  data() {
    return { }
  },
  methods: {
    handleClick() { }
  },
  computed: {
    stickyNav() {
      return this.$store.getters['app/GET_STICKY_NAV']
    }
  },
  beforeRouteLeave (to, from, next) {
    window.localStorage.setItem('refresh', "0")
    next()
  },
  components: { LandingHero, MoveMoney,LearnMore, Brands, Payments, AboutUs, GettingStarted },
  created() {
    var refresh = window.localStorage.getItem('refresh');
    if (refresh == 0){
        window.location.reload()
        window.localStorage.setItem('refresh', "1")
    }
  }
};
</script>
