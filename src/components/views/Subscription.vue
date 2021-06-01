<template>
  <div class="features-wrapper">
    <features-hero
      header-text="Process All Your Recurring Plans in One API"
      text-desc="With Affiliate Builder’s payment dashboard and simple API – making it easy to manage all your subscription plans most cost-effectively."
    />

    <!-- section 2 -->
    <research 
      header-text="Billing Automation in One Platform"
      :text-desc="
        [
          'Affiliate Builder provides a secure payment solution for business, which allows our clients to process automated billing and payment collection regularly. With our sophisticated API: business, eCommerce, iGaming, and other business trends will no longer need to process the recurring bill manually, and customers don’t have to make manual payments every cycle. Let our platform do the automation for your business.', 
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Multiple Pricing and Perks Options"
      :text-desc="
        [
          'You can create as many subscription categories as you like, different discounts, and special offers to cater to your customer’s needs. The more options and better offer – mean conversion for your seasonal customers.',
        ]
      "
      :list-data="subscriptionsList"  
    />
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
    data() {
      return {
        subscriptionsList: [
            {
                id: 0,
                title: 'Personalized Plan',
                icon: ['fas','book-open'],
                block_text:'Specific subscription plans for your customers based on their preferences and particular needs will reach more diverse customers.'
            },
            {
                id: 1,
                title: 'Discounted Plan',
                icon:['fas','users'],
                block_text:'Create a discounted plan for customers that opted-in for longer time frame subscriptions.'
            },
            {
                id: 2,
                title: 'Affiliates or Partners Plan',
                icon: ['fas','chess-rook'],
                block_text:'Providing subscriptions for affiliates or partners will give your business partnership a boost and a long relationship.'
            },
            
        ]
      }
    },
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
