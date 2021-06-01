<template>
  <SlicedSection class="mission-section">
    <template v-slot:slot-left>
      <p class="mission-p">
        Aff Builder is one of the globe&#39;s fastest-growing digital platforms in the financial technology
        industry, offering a wide range of digital payment solutions. As a global payment institution, we
        operate under a vigorous, risk-based compliance program that addresses the regulatory
        requirements of each country that is involved in the cross-border payment. Know Your Client
        (KYC) requirements are verified regularly, our core expertise.
      </p>
    </template>
    <template v-slot:slot-right>
      <header-text size="xl" class="text-left text-uppercase">
       <!-- <br v-if="windowWidth > 767" /> -->
        Aff Builder aims to provide a simple payment processing system, user-friendly, and accessible
        for all types of merchants, whether they are new to their respective industries or merely looking
        for better payment solution options.
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
