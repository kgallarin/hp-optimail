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
            texts: 'Using the most advanced technology for a better solution and achieve high engagement growth to your subscribers and users.',
            imageSource: 'diamond-image01',
            style: ''
          },
          {
            id: 1,
            textHeaders:'Transparency',
            texts: 'Affordable and transparent pricing that caters to your daily budget',
            imageSource: 'diamond-image02',
            style: ''
          },
          {
            id: 3,
            textHeaders:'Campaign Management',
            texts: 'Track your account activities, manage data and check the campaign progress straight in your dashboard',
            imageSource: 'diamond-image03',
            style: 'offset-top-left image-text-swap'
          },
          {
            id: 4,
            textHeaders:'Perks and Referral Bonus',
            texts: 'Get your connections all together with your referral code and get a cash bonus directly to your Affi Builder account once they sign up and create their own network.',
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
