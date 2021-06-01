<template>
  <div class="features-wrapper">
    <features-hero 
      header-text="Mass Payouts"
      text-desc="Affiliate Builder provides the most efficient, state of the art mass payment API when you can process your bulk payment 
      and track the progress in just one click, which helps you save time and focus more on building your business."
    />

    <!-- section 2 -->
    <research 
      header-text="Mass Payment Platform"
      :text-desc="
        [
          'With Affiliate Builder mass payment platform, you can make mass payments securely and in a cost-effective way to Visa, Mastercard, SEPA, Bank Transfer or SWIFT, eWallets, or any online account in either local or international cross border payouts.', 
          'With our wide range of payment methods – we offer an attractive rate without double commissions to instantly process payouts any time of the day.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Domestic and International Mass Payment Solutions"
      :text-desc="
        [
          'Sending at least hundreds of mass payouts only takes a few minutes. With Affiliate Builder’s mass payment platform – payouts are group together for efficiency.', 
          'According to the report, ACH payments had the lowest fraud rate, by value, among the payment types with just 1.3% of fraudulent ACH transactions in 2015.'
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

    <br />

     <!--           Payment content            -->

    <features-hero
      header-text="Payment Processing"
      text-desc="Affiliate Builder payment platform supports payment processing for all online transactions, 
      whether it&#39;s credit card and debit card, e-wallets, bank transfer, and mobile banking activities."
    />

    <!-- section 2 -->
    <research 
      header-text="Accept WorldWide Payment from Different Currencies."
      :text-desc="
        [
          'Our solutions will allow you to localize your payment target locations and broaden to worldwide scope.', 
          'We have the latest cutting-edge technologies that emphasize on core customers and product experiences that will cater to all your payment needs as you grow your business. Whether domestic or international, POS, on-site, or in-app transactions, Affiliate Builder has everything you need from a secure payment processing to recurring bills and subscriptions, from marketplace to simply accepting payments from any currency.',
          'Increase your revenue with fast and secure payment options, low-cost B2B transactions, and advanced checkout conversion. Our process will ensure that the funds will be credited immediately and available for use without any foreign exchange liabilities.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Accessible Mobile Payment"
      :text-desc="
        [
          'In today\'s emerging technology, where you can do everything with just a single click, mobile phones became the most quintessential gadgets for reaching your customers. With Affiliate Builder, your customers can make a mobile payment, barcode scanning, checking transactions, NFC, and mobile wallets or apps: mobile payment options are dynamic for every industry and company.',
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

<br />

    <!-- CURRENCY CONVERSIONS -->

    <features-hero
      header-text="FX Exchange"
      text-desc="Have access to current foreign exchange rates before you make your conversions."
    />

    <!-- section 2 -->
    <research 
      header-text="Currency Conversions"
      :text-desc="
        [
          'Affiliate Builder understands the importance of bringing transparency to finance. We offer a mid-market, competitive range of foreign exchange without hidden fees. Our automated conversion functions provide you best exchange rates, convert funds, and manage settlements at your Affiliate Builder online account with little feasible cost as possible in real-time.', 
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Settlements and Conversion Management"
      :text-desc="
        [
          'With our settlement platforms, you can merge multiple conversion into a single transaction to store funds in your Affiliate Builder account.',
        ]
      "
      :list-data="[]"  
    />


    <!-- SUBSCRIPTION -->

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
        massList: [
              {
                  id: 0,
                  title: 'Manage, Audit and Launch Funds Transfer',
                  icon: ['fas','book-open'],
                  block_text:'Affiliate Builder’s platform is fully equipped to track each transaction, view trends in metrics and performance while checking customer accounts and initiating funds transfers.'
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
                  block_text:'Affiliate Builder\'s mass payment solutions help remove all international bank transfer fees, acquire a better foreign exchange rate, lessen data entry errors, and accelerate the processing of your mass payment.'
              }
          ],
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
              },
              {
                  id: 5,
                  title: 'and many more.',
                  icon: ['fas','user-shield'],
                  block_text:''
              }
              
          ],
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
              
          ],
          massBlueList: [
              {
                  id: 0,
                  title: 'Step 1',
                  icon: ['fas','database'],
                  block_text:'Just enter your file containing massive payments lists directly to the Affiliate Builder platform, and you can view everything live.'
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
                  block_text:'Affiliate Builder – as one of the leading international payment service providers, offers you secured access to over 250 payment networks that can be easily configured.'
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
