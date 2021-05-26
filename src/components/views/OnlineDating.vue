<template>
  <div class="features-wrapper">
    <features-hero
      header-text="Online Dating Merchants"
      text-desc="The online dating industry offers people a safe way to search for love, Companionship, and passionate one night stands."
    />

    <!-- section 2 -->
    <research 
      header-text="Monetization from Online Dating"
      :text-desc="
        [
          'This industry is growing by 15% each year, and it has a global market ready to be linked. That\'s why we accept payments with 38 currencies in over 180 countries across the world.',
          'Dating sites have various monetization methods such as premium subscriptions, extra feature charges such as virtual kisses, winks, and virtual gifts. Having a reliable payment gateway to offer all these services to the users through safe monthly billing is the way to grow and keep customers returning.',
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Merchant account for Online dating"
      :text-desc="
        [
          'Online dating has been classified as high-risk, making these services unsuitable for merchant accounts at numerous banks. HydroPay has a vast network of banking partners that accept online dating services and can provide competitive rates. '
        ]
      "
      :list-data="dating_list"  
    />

    <!-- section 4 -->
    <security 
      header-text="Versatile Subscriptions and Packages"
      text-desc="Dating sites must offer a multitude of services, depending on the needs of every type of customer., Give users the quickest way to start any subscription or package and search for love using HydroPay: "
      :list-data="dating_bluelist" 
    />
     <!-- footers  -->

    <!-- section 5 -->
    <contact 
      header-text="Confidentiality for Dating Users"
      :text-desc="
        [
          'It is essential for your users that they feel safe when using your dating site. That is why HydroPay offers confidential payment confirmation. You can remove your dating site name from the payment confirmation sent to the user so that the user can keep his online dating activities a secret.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Increase revenue with mobile payments"
      :text-desc="
        [
          'It is crucial to implement mobile payments in an online dating site to increase traffic and conversion rates. In 2020, the number of people in the world that own a smart and feature phone is 4.78 Billion, making up 61.62% of the world\'s population, so it is only logical to offer mobile payment methods.',
          'Since most users tend to use phones for texting on online dating sites, the same users should be able to make payments through their phones. Offering mobile payments with HydroPay will have a direct positive impact on your revenue.'
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
          dating_list: [
              {
                  id: 0,
                  title: 'Maintain a Low Chargeback',
                  icon: ['fas','book-open'],
                  block_text:'The online dating industry has a higher-than-average number of chargebacks. Maintaining a low chargeback ratio is critical because if chargebacks exceed the maximums, the merchant account becomes at risk of being shut down by the banks. HydroPay is an expert when it comes to chargeback management and can guide you to self-regulate and establish industry best practices. '
              },
              {
                  id: 1,
                  title: 'Chargeback Prevention',
                  icon:['fas','users'],
                  block_text:'Many online-dating merchants do not anticipate the risks involved in working with customers who have unrealistic expectations about the difficulty find a perfect partner. These customers initiate a chargeback or default on a recurring subscription payment due to disappointment. That is why it is advantageous to work with us as we are familiar with the online dating industry.'
              },
              {
                  id: 2,
                  title: 'Multiple merchant account IDs (MIDs):',
                  icon:['fas','users'],
                  block_text:'Online dating companies usually need more than one merchant account to support their varied services. HydroPay can manage multiple merchant IDs organized under one main MID account.'
              }
              
          ],
          dating_bluelist: [
              {
                  id: 0,
                  title: 'Free trials for casual browsers',
                  icon: ['fas','database'],
                  block_text:''
              },
              {
                  id: 1,
                  title: 'Premium subscription levels with virtual gifts for committed searchers. ',
                  icon:['fas','cloud'],
                  block_text:''
              },
              {
                  id: 2,
                  title: 'Free subscriptions to women',
                  icon:['fas','cloud'],
                  block_text:''
              },
              {
                  id: 3,
                  title: 'Auto top-up plans and Instant one-click payments',
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
