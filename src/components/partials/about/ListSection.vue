<template>
  <SlicedSection single-column class="about-list-section">
    <header-text size="xlg" class="text-center text-uppercase">
      The customer&#39;s perception and expectation is our reality
    </header-text>
    <!-- <div class="abt-list-sub">
      We believe the best teams are built by the inclusion of diverse ideas, experiences and people. We don’t just
      <br />say it, we live it.
    </div> -->

    <iconed-list />
  </SlicedSection>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'

import IconedList from './IconedList/IconedList'
  export default {
    name: 'ListSection',
    components: {
      HeaderText,
      SlicedSection,
      IconedList
    }
  }
</script>
