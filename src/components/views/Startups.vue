<template>
  <div class="features-wrapper">
    <features-hero
      header-text="SaaS and Start-ups Merchants"
      text-desc="Regardless of the size of your business, we can offer you a solution tailored to your business needs. We can provide you and your customers with a one-stop-shop using state-of-the-art technologies for online transactions."
    />

    <!-- section 2 -->
    <research 
      header-text="Recurring payments along with other billing modes"
      :text-desc="
        [
          'Implement our payment solution to improve customer satisfaction through endless customization options. Grow sales by having multiple billing models at the same time and offer your customers the option to point-and-click recurring payments and service subscriptions. Provide them with instant purchases and no need to re-enter card details.',
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Customize the appearance"
      :text-desc="
        [
          'You can easily integrate and customize the checkout with your brand colors and logo for a unique user experience. No need to redirect elsewhere, start accepting the most popular payment methods on your website. With a high focus on quality, we provide your customers with seamless user experience and continuous conversion rate optimization.'
        ]
      "
    />

    <!-- section 4 -->
    <security 
      header-text="Tailor payment plans for each customer"
      text-desc="We have built a fully compliant gateway with a seamless payment processing experience. "
      :list-data="startups_bluelist" 
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
          gamingList: [
              {
                  id: 0,
                  title: 'Fraud Protection',
                  icon: ['fas','book-open'],
                  block_text:'Chargebacks from players have become an increasing challenge. Aff Builder can provide fraud prevention to identify fraudulent transactions in real-time. We have implemented hundreds of data points that minimize chargebacks and detect fraudsters.'
              },
              {
                  id: 1,
                  title: 'Regulatory Compliance',
                  icon:['fas','users'],
                  block_text:'We meet all gambling regulations across the European Union. We provide a fully compliant and safe gateway that all gambling and betting merchants can rely on for online transactions.'
              }
              
          ],
          startups_bluelist: [
              {
                  id: 0,
                  title: 'Multiple Plans',
                  icon: ['fas','database'],
                  block_text:'Assign multiple pricing or subscription plans to single a customer by charging for numerous products or services.'
              },
              {
                  id: 1,
                  title: 'Additional Products',
                  icon:['fas','cloud'],
                  block_text:'Give options for additional products to your subscribers.'
              },
              {
                  id: 2,
                  title: 'Free Trials',
                  icon:['fas','cloud'],
                  block_text:'Offer free trials to first-time customers to provide them with some time to make a decision.'
              },
              {
                  id: 3,
                  title: 'Automatic Billing',
                  icon:['fas','cloud'],
                  block_text:'Start billing automatically after the trial period ends.'
              },
              {
                  id: 3,
                  title: 'Automatic Billing',
                  icon:['fas','cloud'],
                  block_text:'Start billing automatically after the trial period ends. Your options are limitless. '
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
