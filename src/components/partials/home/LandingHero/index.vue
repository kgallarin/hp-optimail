<template>
    <!-- please check landing_hero.scss for this sliced section class -->
  <SlicedSection class="landing-hero">
    <template v-slot:slot-left>
      <div class="hero-intro-wrapper">
        <p class="font-lg landing-hero--header">
          <strong class="text-uppercase">Redefining the Power of Affiliation Through AI</strong>
        </p>
        <ul class="landing-hero--list">
          <li>Create, grow and manage your own affiliate platform.</li>
          <li> 
            Providing a profitable network to promote your products within minutes.
          </li>
        </ul>
      </div>

      <router-link :to="{name: 'register'}">
        <Button class="custom-button-yellow" label="get started" />
      </router-link>
    </template>

    <template v-slot:slot-right>
      <!-- <animated-demo v-if="windowWidth > 1200"  /> -->
      <img :src="require('@images/affiliate/affhero.png')" alt="Aff Builder">
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
