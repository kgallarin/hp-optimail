<template>
  <div class="features-wrapper">
    <features-hero
      header-text="iGaming Merchants"
      text-desc="Get a winning edge with Affiliate Builder! Affiliate Builder understands all the unique requirements of online gaming. Whether it's online gambling, online poker, online casinos, or any type of iGaming, our team recognizes the challenges you may face."
    />

    <!-- section 2 -->
    <research 
      header-text="Fast and Simple Checkout"
      :text-desc="
        [
          'Returning players need fast and secure card payments with one-click checkouts; that is why we provide payments without any redirection or waiting. The Remember Me feature will let your customers pay instantly with just one click, and there is no need to remember all the credit card details. When a returning player wants to pay, they will see a pre-filled checkout form, and will only need to provide their CVC.',
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="iGaming Merchant Account"
      :text-desc="
        [
          'We are experienced with high-risk payment processing and can help you acquire merchant accounts. We will help you protect those accounts from fraud using our fraud prevention processes created to catch potential chargeback threats before they happen.'
        ]
      "
      :list-data="gamingList"  
    />

    <!-- section 4 -->
    <security 
      header-text="Reporting and analytics"
      text-desc="Use the HydroHay dashboard to get an overview of your gaming product sales. "
      :list-data="gaming_bluelist" 
    />
     <!-- footers  -->

    <!-- section 5 -->
    <contact 
      header-text="Global iGaming payments"
      :text-desc="
        [
          'Affiliate Builder offers gaming operators a payment system that can accept payments from every corner of the world. To increase acceptance rates and improve international player confidence in the game, you should allow players to make deposits in their home currency. We have you covered with more than 38 currencies in over 180 countries. With our multiple partners around the world, we have developed strong banking relationships to support online gaming. '
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Get mobile reach"
      :text-desc="
        [
          'The mobile gaming sector has grown to one of the most significant industries over the past few years. Both games and payment pages must be able to respond to any device, whether desktop, mobile, or tablet, to provide the players with a better experience. This way, you will not miss out on any significant revenue from mobile users by implementing Affiliate Builder for a better mobile experience.'
        ]
      "
    />

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
          gamingList: [
              {
                  id: 0,
                  title: 'Fraud Protection',
                  icon: ['fas','book-open'],
                  block_text:'Chargebacks from players have become an increasing challenge. Affiliate Builder can provide fraud prevention to identify fraudulent transactions in real-time. We have implemented hundreds of data points that minimize chargebacks and detect fraudsters.'
              },
              {
                  id: 1,
                  title: 'Regulatory Compliance',
                  icon:['fas','users'],
                  block_text:'We meet all gambling regulations across the European Union. We provide a fully compliant and safe gateway that all gambling and betting merchants can rely on for online transactions.'
              }
              
          ],
          gaming_bluelist: [
              {
                  id: 0,
                  title: 'Track sales',
                  icon: ['fas','database'],
                  block_text:''
              },
              {
                  id: 1,
                  title: 'Reconcile payouts',
                  icon:['fas','cloud'],
                  block_text:''
              },
              {
                  id: 2,
                  title: 'Monitor conversion rates',
                  icon:['fas','cloud'],
                  block_text:''
              },
              {
                  id: 3,
                  title: 'We support credit cards and mobile payments ',
                  icon:['fas','cloud'],
                  block_text:''
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
