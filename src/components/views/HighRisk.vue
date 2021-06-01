<template>
  <div class="features-wrapper">
    <features-hero
      header-text="High-Risk merchant account payment gateway"
      text-desc="If you are having difficulties obtaining a merchant account, we can help."
    />

    <!-- section 2 -->
    <research 
      header-text="Personalized Treatment"
      :text-desc="
        [
          'We accept Visa, MasterCard, and all other major credit cards from your website, app, or mobile. Our account managers work with each merchant individually and will help tailor a solution to your needs. It is imperative to find the right mix to achieve the highest coverage and customer satisfaction with minimal risk and expenses. So sign up now for a trustworthy and low-cost international payment gateway.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="With Affiliate Builder, you'll get treated equally"
      :text-desc="
        [
          'We know that not every business is built the same, even among high-risk merchants, there are massive differences. Shatter the barriers of typical high-risk treatment and work with us to get:'
        ]
      "
      :list-data="hr_list"  
    />

    <!-- section 4 -->
    <security 
      header-text="4 Simple Steps to a High-Risk Account"
      text-desc="Here is how the process usually works:"
      :list-data="hr_blueList" 
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
    data() {
      return {
          hr_list: [
              {
                  id: 0,
                  title: 'Quick onboarding to start processing in no time',
                  icon: ['fas','book-open'],
                  block_text:''
              },
              {
                  id: 1,
                  title: 'No Application & Setup Fees',
                  icon:['fas','users'],
                  block_text:''
              },
              {
                  id: 2,
                  title: 'Easy Approval & Activation',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 3,
                  title: 'No Early Termination Fees',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 4,
                  title: 'Save money with low processing rates of 2.49%',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 5,
                  title: 'Fraud Protection',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 6,
                  title: 'Partners with banks around the world',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 7,
                  title: 'Process payments from over 180 countries',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 8,
                  title: 'Credit Cards, Apple Pay, Google Pay',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 9,
                  title: 'High-Performance Payment Gateway',
                  icon: ['fas','chess-rook'],
                  block_text:''
              }
              
          ],
          hr_blueList: [
              {
                  id: 0,
                  title: 'Step 1',
                  icon: ['fas','database'],
                  block_text:'You try to acquire a merchant account with a traditional provider but fail.'
              },
              {
                  id: 1,
                  title: 'Step 2',
                  icon:['fas','cloud'],
                  block_text:'You go looking for a new partner who specializes in high-risk merchant accounts and came across Affiliate Builder.'
              },
              {
                  id: 2,
                  title: 'Step 3',
                  icon:['fas','cloud'],
                  block_text:'We get connected, and we start getting your high-risk merchant account processed quickly. '
              },
              {
                  id: 3,
                  title: 'Step 4',
                  icon:['fas','cloud'],
                  block_text:'You are using our payment gateway in no time at a low rate and can start growing your business.'
              }
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
