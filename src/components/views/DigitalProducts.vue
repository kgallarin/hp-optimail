<template>
  <div class="features-wrapper">
    <features-hero
      header-text="Digital product Merchants"
      text-desc="HydroPay can provide you with all the payment solutions for your digital products worldwide to accelerate your profits and acquire more customers."
    />

    <!-- section 2 -->
    <research 
      header-text="The Optimal Payment Mix"
      :text-desc="
        [
          'Expand your business by upgrading your payment workflow for your customers. If you are searching for the optimal payment mix for your digital products and services, we can provide you with an optimal balance of swift and smooth shopping experiences. We know how your customers pay, whether they are gamers, music lovers, or video-on-demand fans.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="What to expect from us"
      :text-desc="[]"
      :list-data="digitalProductList"  
    />

    <!-- section 4 -->
    <security 
      header-text="Why is HydroPay right for you?"
      :list-data="paymentBlueList" 
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
          digitalProductList: [
              {
                  id: 0,
                  title: 'A New Approach',
                  icon: ['fas','book-open'],
                  block_text:'We\'ve created a new approach that offers a customizable global solution with flexible local payment methods.'
              },
              {
                  id: 1,
                  title: 'One-stop payment solution',
                  icon:['fas','users'],
                  block_text:'We provide a simple integration for your business with a one-stop payment solution. It provides fully digitized acceptance services and delivery of digital products.'
              },
              {
                  id: 2,
                  title: 'Data-driven Insights',
                  icon: ['fas','chess-rook'],
                  block_text:'HydroPay is a data-driven solution for digital products that provide clear and comprehensive reports, insights, and analyses for your business.'
              },
              {
                  id: 3,
                  title: 'Industry-leading Expertise',
                  icon: ['fas','user-shield'],
                  block_text:'We can offer you a personal account manager that will clarify all questions and issues. They will consult with you to find the best tailored services to fit your needs by providing industry-leading expertise in digital goods and ﬁnancial services.'
              }
          ],
          paymentBlueList: [
              {
                  id: 0,
                  title: 'Tokenization',
                  icon: ['fas','database'],
                  block_text:'A tokenization system that securely stores card details and enables recurring billing and one-click payment for your frequent customers of digital products.'
              },
              {
                  id: 1,
                  title: 'Accepting Cards',
                  icon:['fas','cloud'],
                  block_text:'You will acquire a global reach for your digital products and can start accepting credit and debit cards from customers around the globe.'
              },
              {
                  id: 2,
                  title: 'Simplistic Integration',
                  icon:['fas','cloud'],
                  block_text:'Effortless integration with our straightforward payment dashboard, and integrate the payment form into your website by copy & paste of two lines of code.'
              },
              {
                  id: 3,
                  title: '24/7 Fraud Monitoring',
                  icon:['fas','cloud'],
                  block_text:'Protect your business from downturns with an anti-fraud system with 24/7 fraud monitoring.'
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
