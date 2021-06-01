<template>
  <div class="diamond-section">
    <div class="diamond-gems-wrapper">
      <template v-for="gem in diamondGems">
        <Gems :data="gem" :key="gem.id" />
      </template>
    </div>
  </div>
</template>

<script>
import SlicedSection from '@components/common/SlicedSection'
import Gems from './Gems'
  export default {
    name: 'DiamondSection',
    data() {
      return {
        diamondGems: [
          {
            id: 0,
            textHeaders:'Innovative',
            texts: 'Using the most advanced technology for a better solution for moving money around the world,making it affordable, fast, and available for everyone.',
            imageSource: 'diamond-image01',
            style: ''
          },
          {
            id: 1,
            textHeaders:'Instant Money Transfer',
            texts: 'Aff Builder to Aff Builder account funds transfer will reflect the funds in real-time with no hidden fees.',
            imageSource: 'diamond-image02',
            style: ''
          },
          {
            id: 3,
            textHeaders:'Perks and Referral Bonus',
            texts: 'Get your friends and family all together with your referral code and get a cash bonus directly to your Aff Builder account once they signed up and make their first transfer.',
            imageSource: 'diamond-image03',
            style: 'offset-top-left image-text-swap'
          },
          {
            id: 4,
            textHeaders:'Online Security and Account Transactions',
            texts: 'Track your live account activities by receiving notifications about funds received, online transfers, withdrawals, and deposits.',
            imageSource: 'diamond-image04',
            style: 'offset-top-only image-text-swap'
          }
        ]
      }
    },
    components: {
      SlicedSection,
      Gems
    }
  }
</script>
