<template>
  <div class="features-wrapper">
    <features-hero 
      header-text="Mass Payouts"
      text-desc="Affi Builder provides the most efficient, state of the art mass payment API when you can process your bulk payment 
      and track the progress in just one click, which helps you save time and focus more on building your business."
    />

    <!-- section 2 -->
    <research 
      header-text="Mass Payment Platform"
      :text-desc="
        [
          'With Affi Builder mass payment platform, you can make mass payments securely and in a cost-effective way to Visa, Mastercard, SEPA, Bank Transfer or SWIFT, eWallets, or any online account in either local or international cross border payouts.', 
          'With our wide range of payment methods – we offer an attractive rate without double commissions to instantly process payouts any time of the day.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Domestic and International Mass Payment Solutions"
      :text-desc="
        [
          'Sending at least hundreds of mass payouts only takes a few minutes. With Affi Builder’s mass payment platform – payouts are group together for efficiency.'
        ]
      "
      :list-data="massList"  
    />

    <!-- section 4 -->
    <security 
      header-text="All-in-One Payment Solutions"
      text-desc="Providing your customers with the broadest range and mixes of different payment options is a must-have for successfully converting your seasonal shoppers to a regular one."
      :list-data="massBlueList" 
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
        massList: [
              {
                  id: 0,
                  title: 'Manage, Audit and Launch Funds Transfer',
                  icon: ['fas','book-open'],
                  block_text:'Affi Builder’s platform is fully equipped to track each transaction, view trends in metrics and performance while checking customer accounts and initiating funds transfers.'
              },
              {
                  id: 1,
                  title: 'Local and International Coverage',
                  icon:['fas','users'],
                  block_text:'Having a wide range of payment methods giving your business a wider reach of accepting and sending payments from customers globally.'
              },
              {
                  id: 2,
                  title: '24/7 Highly Trained Customer Support',
                  icon: ['fas','chess-rook'],
                  block_text:'Having issues or any concerns?  Our highly trained technical support is available at any time to provide you assistance to any of your questions.'
              },
              {
                  id: 3,
                  title: 'Accelerated Processing',
                  icon: ['fas','user-shield'],
                  block_text:'Affi Builder\'s mass payment solutions help remove all international bank transfer fees, acquire a better foreign exchange rate, lessen data entry errors, and accelerate the processing of your mass payment.'
              }
          ],
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
