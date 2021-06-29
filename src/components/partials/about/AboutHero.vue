<template>
  <div class="about-hero">
    <img class="hero-image" :src="require('@images/about/main.png')" alt="blog">

    <SlicedSection single-column class="hero-content">
        <header-text size="xlg" class="text-center text-uppercase">
          SIMPLE MARKETING PLATFORM
        </header-text>

        <p class="hero-content-text">
          Aff Builder was founded  with a focus on building the future of digital affiliate marketing  solutions, providing a simple affiliate marketing platform to grow your local and international leads network. 
          We believe that lead conversions should be vast, fast, transparent and affordable, breaking the old and traditional way of marketing – and we found a perfect way to do it!
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
