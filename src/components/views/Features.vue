<template>
  <div class="features-wrapper">
    <features-hero 
      header-text="Power Up Your Lead Conversion Through One Platform"
      text-desc="Affi Builder is equipped with all the features you need to expand your business with affiliates. Everything under your fingertips, in just few clicks away."
    />

    <!-- section 2 -->
    <research 
      header-text="Be Widely Known"
      :text-desc="
        [
          'Affi Builder platform makes it easy to expand your social reach worldwide with awesome engaging branded content.', 
          'With our wide range of payment methods – we offer an attractive rate without double commissions to instantly process payouts any time of the day.'
        ]
      "
      :list-data="widely_known"
      bullet-list
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Easy as 1-2-3"
      :text-desc="
        [
          'Our platform generates easy copy and paste options to share on any social media apps and websites you have.', 
        ]
      "
      :list-data="easy_steps"
      bullet-list
    />

    <!-- section 4 -->
    <!-- <security 
      header-text="All-in-One Payment Solutions"
      text-desc="Providing your customers with the broadest range and mixes of different payment options is a must-have for successfully converting your seasonal shoppers to a regular one."
      :list-data="massBlueList" 
    /> -->

    <br />

     <!--           Payment content            -->

    <!-- <features-hero
      header-text="Payment Processing"
      text-desc="Affi Builder payment platform supports payment processing for all online transactions, 
      whether it&#39;s credit card and debit card, e-wallets, bank transfer, and mobile banking activities."
    /> -->

    <!-- section 2 -->
    <research 
      header-text="One-time or Recurring"
      :text-desc="
        [
          'Attract influencers with massive followers and create their commissions accordingly with our automated commission feature.', 
        ]
      "
      :list-data="recurring"
      bullet-list
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Performance Bonus"
      :text-desc="
        [
          'Increase your sales by having irresistible rewards by setting targets based on the number of conversions made by your affiliates'
        ]
      "
      :list-data="bonus"  
      bullet-list
    />

     <!-- footers  -->

    <!-- section 5 -->
    <!-- <contact /> -->

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
    data() {
      return {
          massBlueList: [
              {
                  id: 0,
                  title: 'Step 1',
                  icon: ['fas','database'],
                  block_text:'Just enter your file containing massive payments lists directly to the Affi Builder platform, and you can view everything live.'
              },
              {
                  id: 1,
                  title: 'Step 2',
                  icon:['fas','cloud'],
                  block_text:'Track live exchange rates, track all transactions, beneficiary details, and see the progress of your bulk payments that are processing within seconds.'
              }
          ],
          paymentBlueList: [
              {
                  id: 0,
                  title: 'Over 250 payment networks',
                  icon: ['fas','database'],
                  block_text:'Affi Builder – as one of the leading international payment service providers, offers you secured access to over 250 payment networks that can be easily configured.'
              },
              {
                  id: 1,
                  title: 'Customizable solution',
                  icon:['fas','cloud'],
                  block_text:'Customize and offer your customers their preferred payment methods with our single interface available for all devices.'
              },
              {
                  id: 2,
                  title: 'Payment Options',
                  icon:['fas','cloud'],
                  block_text:'Every business success relies on customers\ available mode of payment, whether it\'s a physical card, Paypal, Apple Pay, Google Pay, eWallets, Visa or Mastercard, etc.'
              },
              {
                  id: 3,
                  title: 'Checkout Service',
                  icon:['fas','cloud'],
                  block_text:'Our tools and dynamic features will provide your customers with an excellent checkout service experience that supports online and in-person payments.'
              }
          ],
          
          widely_known: [
            {
                id: 0,
                title: 'Provide your own referral links and discount coupons',
                icon: ['fas', 'circle'],
                icon_size: 'sm',
                block_text:''
            },
            {
                id: 1,
                title: 'Personalized banners and other brand materials',
                icon:['fas', 'circle'],
                icon_size: 'sm',
                block_text:''
            },
            {
                id: 2,
                title: 'Create shareable social media links to post for your affiliates',
                icon: ['fas', 'circle'],
                icon_size: 'sm',
                block_text:''
            }
        ],
        
        easy_steps: [
          {
              id: 0,
              title: 'Have a unique link for every campaign especially made for you',
              icon: ['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
          {
              id: 1,
              title: 'Each link are especially designed for every social media apps you have',
              icon:['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
        ],
        
        recurring: [
          {
              id: 0,
              title: 'Give one-time commission on e-commerce traffic',
              icon: ['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
          {
              id: 1,
              title: 'Give monthly commissions via subscriptions',
              icon:['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
          {
              id: 2,
              title: 'Give fixed commissions via percentage',
              icon:['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
          {
              id: 3,
              title: 'Give commissions based on categories or products',
              icon:['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
        ],
        bonus: [
          {
              id: 0,
              title: 'Set affiliate ranks',
              icon: ['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
          {
              id: 1,
              title: 'Set performance bonus',
              icon:['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
          {
              id: 2,
              title: 'Team bonuses',
              icon:['fas', 'circle'],
              icon_size: 'sm',
              block_text:''
          },
        ],
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
