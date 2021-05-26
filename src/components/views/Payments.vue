<template>
  <div class="features-wrapper">
    <features-hero
      header-text="Payment Processing"
      text-desc="HydroPay payment platform supports payment processing for all online transactions, 
      whether it&#39;s credit card and debit card, e-wallets, bank transfer, and mobile banking activities."
    />

    <!-- section 2 -->
    <research 
      header-text="Accept WorldWide Payment from Different Currencies."
      :text-desc="
        [
          'Our solutions will allow you to localize your payment target locations and broaden to worldwide scope.', 
          'We have the latest cutting-edge technologies that emphasize on core customers and product experiences that will cater to all your payment needs as you grow your business. Whether domestic or international, POS, on-site, or in-app transactions, HydroPay has everything you need from a secure payment processing to recurring bills and subscriptions, from marketplace to simply accepting payments from any currency.',
          'Increase your revenue with fast and secure payment options, low-cost B2B transactions, and advanced checkout conversion. Our process will ensure that the funds will be credited immediately and available for use without any foreign exchange liabilities.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Accessible Mobile Payment"
      :text-desc="
        [
          'In today\'s emerging technology, where you can do everything with just a single click, mobile phones became the most quintessential gadgets for reaching your customers. With Hydropay, your customers can make a mobile payment, barcode scanning, checking transactions, NFC, and mobile wallets or apps: mobile payment options are dynamic for every industry and company.',
          'Give your customers a complete payment option for any industry'
        ]
      "
      :list-data="paymentList"  
    />

    <!-- section 4 -->
    <security 
      header-text="All-in-One Payment Solutions"
      text-desc="Providing your customers with the broadest range and mixes of different payment options is a must-have for successfully converting your seasonal shoppers to a regular one."
      :list-data="paymentBlueList" 
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
          paymentList: [
              {
                  id: 0,
                  title: 'eCommerce business',
                  icon: ['fas','book-open'],
                  block_text:''
              },
              {
                  id: 1,
                  title: 'Digital products',
                  icon:['fas','users'],
                  block_text:''
              },
              {
                  id: 2,
                  title: 'Online dating',
                  icon: ['fas','chess-rook'],
                  block_text:''
              },
              {
                  id: 3,
                  title: 'iGaming',
                  icon: ['fas','user-shield'],
                  block_text:''
              },
              {
                  id: 4,
                  title: 'Selling high-risk goods',
                  icon: ['fas','user-shield'],
                  block_text:''
              }              
          ],
          paymentBlueList: [
              {
                  id: 0,
                  title: 'Over 250 payment networks',
                  icon: ['fas','database'],
                  block_text:'HydroPay – as one of the leading international payment service providers, offers you secured access to over 250 payment networks that can be easily configured.'
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
