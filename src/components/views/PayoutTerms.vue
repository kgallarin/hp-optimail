<template>
  <div class="payout-terms">
    <receipt-card 
      has-card
      has-ribbon
      header-text="Discover how Affi Builder processed every payouts, payout periods, payment methods and how we reward amazing affiliate performance."
    />
  </div>
</template>

<script>
import ReceiptCard from '@components/partials/pricing/ScrollContents/ReceiptCard'
export default {
  name: 'PayoutTerms',
  components: {
    ReceiptCard
  }
}
</script>