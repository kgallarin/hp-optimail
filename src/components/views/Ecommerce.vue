<template>
  <div class="features-wrapper">
    <features-hero
      header-text="eCommerce Merchants"
      text-desc="Customer Experience at the forefront of eCommerce We provide a modern all-in-one platform make global digital sales easier with which your business and customers can grow."
    />

    <!-- section 2 -->
    <research 
      header-text="Improve and Simplify"
      :text-desc="
        [
          'An innovative payment service provider, we offer payment solutions that allow merchants to accept local and international payments. We simplify e-commerce and m-commerce payments for merchants. You can improve your payment processes by easily connecting your business\'s e-commerce platform to our gateway and start accepting global payments.'
        ]
      "
    />

    <!-- section 3 -->
    <data-protection 
      header-text="Grow your business with us, from a start-up to global markets:"
      :list-data="ecommerce_list"  
    />

    <!-- section 4 -->
    <security 
      header-text="Choosing a payment gateway"
      text-desc="We tick all the boxes, so why look further. It doesn't matter if you're looking to expand into international markets, managing subscription packages or just want to boost conversion rates, Affiliate Builder can help with all your needs and the complexities of global digital commerce. But first, get the right criteria filled"
      :list-data="e_commerce_blueList" 
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
          ecommerce_list: [
              {
                  id: 0,
                  title: 'Grow & Go Global',
                  icon: ['fas','book-open'],
                  block_text:'Want to go after the global market? With our platform, merchants can accept payments throughout the world regardless if they\'re selling products or subscriptions. No matter yours or your clients\' location, you can accept payments from worldwide destinations. With our straightforward payment checkout and forms, users will feel ease like they are sitting right next to you and getting personalized customer service.'
              },
              {
                  id: 1,
                  title: 'Ultimate Customer Experience',
                  icon:['fas','users'],
                  block_text:'We\'re focused on helping you create world-class user experiences. Affiliate Builder provides the ultimate checkout experience, and it\'s the only commerce solution you\'ll ever need. Our customizable checkout will help you improve conversion rates, and the set up is easy and quick. Offering our fast and straightforward way to pay for products by using our customizable forms will have a positive impact on your sales and returning customers.'
              },
              {
                  id: 2,
                  title: 'Global Subscription Payments',
                  icon: ['fas','chess-rook'],
                  block_text:'Easily set up subscriptions, customize trial periods, and pricing, once they are set up, there is nothing else to do but watch your business grow. We provide payments support for recurring billing, at the global level. It\'s easy to move to subscriptions or to improve your subscription business when you work with us. Our tools provide excellent flexibility for your billing needs, whether recurring weekly or monthly, our billing setup options will help grow your customer base and loyalty.'
              }
              
          ],
          e_commerce_blueList: [
              {
                  id: 0,
                  title: 'Choose a payment gateway that is popular in your target country.',
                  icon: ['fas','database'],
                  block_text:''
              },
              {
                  id: 1,
                  title: 'Check that the payment gateway has low transaction fees.',
                  icon:['fas','cloud'],
                  block_text:''
              },
              {
                  id: 2,
                  title: 'Do you plan to expand in the global market, and will you be able to use the payment gateway then?',
                  icon:['fas','cloud'],
                  block_text:''
              },
              {
                  id: 3,
                  title: 'Does it provide an excellent shopping experience for your customers?',
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
