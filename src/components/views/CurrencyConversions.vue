<template>
  <div class="features-wrapper">
    <!-- CURRENCY CONVERSIONS -->

    <features-hero
      header-text="FX Exchange"
      text-desc="Have access to current foreign exchange rates before you make your conversions."
    />

    <!-- section 2 -->
    <research 
      header-text="Currency Conversions"
      :text-desc="
        [
          'Affi Builder understands the importance of bringing transparency to finance. We offer a mid-market, competitive range of foreign exchange without hidden fees. Our automated conversion functions provide you best exchange rates, convert funds, and manage settlements at your Affi Builder online account with little feasible cost as possible in real-time.', 
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Settlements and Conversion Management"
      :text-desc="
        [
          'With our settlement platforms, you can merge multiple conversion into a single transaction to store funds in your Affi Builder account.',
        ]
      "
      :list-data="[]"  
    />

     <!-- footers  -->

    <!-- section 5 -->
    <contact />

    <!-- section 6 -->
    <getting-started/>

  </div>
</template>

<script>
import FeaturesHero from '@components/partials/features/FeaturesHero'
import Research from '@components/partials/features/Research'
import DataProtection from '@components/partials/features/DataProtection'
import Security from '@components/partials/features/Security'
import Contact from '@components/partials/features/Contact'
import GettingStarted from '@components/partials/home/GettingStarted'
  export default {
    name: 'Features',
    components: {
      FeaturesHero,
      Research,
      DataProtection,
      Security,
      Contact,
      GettingStarted
    }
  }
</script>
