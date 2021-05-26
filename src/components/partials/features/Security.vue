<template>
  <div class="features-security-wrapper">
    <header-text size="xmd" class="text-center text-uppercase">
      {{ headerText }}
    </header-text>
    <p class="text-center text-desc">
      <!-- Don’t manage the complexities of payments alone. <br v-if="windowWidth > 767" />
      Let HydroPay’s accomplished security team protect what matters most. -->
      {{ textDesc }}
    </p>
    <SlicedSection single-column class="">
      <check-list :listData="listData"/>
    </SlicedSection>
  </div>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import HeaderText from '@components/common/HeaderText'
import CheckList from '@components/common/CheckList'
  export default {
    name: 'Security',
    props: {
      listData: {
        type: Array,
        default: () => []
      },
      headerText: {
        type: String,
        default: ''
      },
      textDesc: {
        type: String,
        default: ''
      }
    },
    components: {
      SlicedSection,
      HeaderText,
      CheckList
    },
    computed: {
      windowWidth() {
          return this.$store.getters['app/GET_WINDOW_WIDTH']
      }
    }
  }
</script>
