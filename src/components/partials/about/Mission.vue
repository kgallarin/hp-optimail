<template>
  <SlicedSection class="mission-section">
    <template v-slot:slot-left>
      <p class="mission-p">
        Affi Builder is one of the globe&#39;s fastest-growing affiliate marketing platforms offering a simplest way for businesses to consolidate data through exceptional technology with human touch, providing a simple affiliate program and data processing platform accessible for all types of businesses.
      </p>
    </template>
    <template v-slot:slot-right>
      <header-text size="xl" class="text-left text-uppercase">
       <!-- <br v-if="windowWidth > 767" /> -->
       All Types of Businesses
      </header-text>
    </template>
  </SlicedSection>
</template>

<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'

  export default {
    name: 'MissionSection',
    components: {
      SlicedSection,
      HeaderText
    },
    computed: {
        windowWidth() {
            return this.$store.getters['app/GET_WINDOW_WIDTH']
        }
    }
  }
</script>
