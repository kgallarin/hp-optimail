<template>
  <div class="about-hero">
    <img class="hero-image" :src="require('@images/about/main.png')" alt="blog">

    <SlicedSection single-column class="hero-content">
        <header-text size="xlg" class="text-center text-uppercase">
          Our Mission is to Provide a Simple Payment Processing System  <br v-if="windowWidth < 768" /> That Supports All Your
          Local and International Cross-Border Payment Needs
        </header-text>

        <p class="hero-content-text">
          HydroPay was founded in 2018 with a focus on building the future of digital payment solutions.
          We believe that funds transfer should be transparent, secure, fast, and affordable, breaking the
          old and traditional way of moving money – and we found a perfect way to do it!
        </p>

        <router-link :to="{ name: 'register'}">
          <Button type="submit" class="custom-button-yellow" label="get started" />
        </router-link>
    </SlicedSection>
  </div>
</template>

<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'
import Button from '@components/common/FormElements/Button'

  export default {
    name: 'AboutHero',
    components: {
      SlicedSection,
      HeaderText,
      Button
    },
    computed: {
      windowWidth() {
        return this.$store.getters['app/GET_WINDOW_WIDTH']
      }
    }
  }
</script>
