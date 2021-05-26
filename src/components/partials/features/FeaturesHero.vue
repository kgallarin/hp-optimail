<template>
  <SlicedSection single-column class="features-hero">
    <header-text size="xlg" class="text-uppercase">{{ headerText }}</header-text>

    <p class="text-desc">
      {{ textDesc }}
    </p>
     <!-- animated image -->
    <animated-data-center />
  </SlicedSection>
</template>

<script>

import SlicedSection from '@components/common/SlicedSection'
import HeaderText from '@components/common/HeaderText'
import AnimatedDataCenter from './AnimatedDataCenter'
  export default {
    name: 'FeaturesHero',
    props: {
      headerText: {
        type: String,
        default: ''
      },
      textDesc: {
        type: String,
        default: ''
      }
    },
    mounted() {
    },
    components: {
      SlicedSection,
      HeaderText,
      AnimatedDataCenter
    },
    computed: {
        windowWidth() {
            return this.$store.getters['app/GET_WINDOW_WIDTH']
        }
    }
  }
</script>
