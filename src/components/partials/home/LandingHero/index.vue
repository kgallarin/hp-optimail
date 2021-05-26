<template>
    <!-- please check landing_hero.scss for this sliced section class -->
  <SlicedSection class="landing-hero">
    <template v-slot:slot-left>
      <div class="hero-intro-wrapper">
        <p class="font-lg landing-hero--header">
          <strong class="text-uppercase">Online Payment Processing</strong>
        </p>
        <ul class="landing-hero--list">
          <li>Grow your online business through a single software platform.</li>
          <li>Boost conversion & acceptance rates.</li>
          <li>Use automated features for demanding global payment operations.</li>
        </ul>
      </div>

      <router-link :to="{name: 'register'}">
        <Button class="custom-button-yellow" label="get started" />
      </router-link>
    </template>

    <template v-slot:slot-right>
      <animated-demo v-if="windowWidth > 1200"  />
    </template>


    <template v-slot:extra>
      <waves />
    </template>
  </SlicedSection>
</template>

<script>
import SlicedSection from '@components/common/SlicedSection'
import Button from '@components/common/FormElements/Button'
import { mapGetters } from "vuex";

import Waves from '../Waves'
import AnimatedDemo from '../AnimatedDemo'
export default {
  name: "LandingHero",
  props: {},
  data: () => ({}),
  methods: {
  },
  computed: {
    windowWidth() {
      return this.$store.getters['app/GET_WINDOW_WIDTH']
    }
  },
  components: { Waves, SlicedSection, Button, AnimatedDemo },
};
</script>
