<template>
    <SlicedSection single-column class="learn-more">
        <header-Text class="text-capitalize"> Marketing Platform for all your needs </header-Text>

        <div class="list-container-wrapper">
            <div class="list-container">
                <!-- <template v-for="data in list" > -->
                <div class="list-column d-flex">
                   <div class="icon-container">
                     <font-awesome-icon :icon="['fas','users']" size="4x" />
                   </div>
                  <div class="list-column-content">
                    <header class="list-column-header">Scale your bussiness</header>
                    <p class="list-column-description">
                      Aff Builder provides the most advanced suite to integrate, manage, track and reward affiliates or direct publishers on any kind of device
                    </p>
                  </div>
                </div>
                
                <div class="list-column d-flex">
                   <div class="icon-container">
                     <font-awesome-icon :icon="['fas','user-shield']" size="4x" />
                   </div>
                  <div class="list-column-content">
                    <header class="list-column-header">Fraud protection</header>
                    <p class="list-column-description">
                      Detect and blacklist bot traffic and stop wasting money on non-human clicks. 
                    </p>
                    <p class="list-column-description">
                      Identify fake leads with real-time multi-data point user profiling, configure-at-will Machine Learning Driven Alerts, and hold suspicious conversions by implementing AI rules. 
                    </p>
                  </div>
                </div>
                
                <div class="list-column d-flex">
                   <div class="icon-container">
                     <font-awesome-icon :icon="['fas','sort-amount-up']" size="4x" />
                   </div>
                  <div class="list-column-content">
                    <header class="list-column-header">Powerful tools</header>
                    <p class="list-column-description">
                      Providing you and your affiliates with everything you need - from Landings, Banners, Tracking software, robust analytics with an intuitive interface.
                    </p>
                  </div>
                </div>
                <!-- </template> -->
            </div>
        </div>

      <router-link :to="{name: 'features'}">
        <Button class="custom-button-yellow" label="learn more" />
      </router-link>
    </SlicedSection>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'


import ListColumn from '../ListColumn'
import Button from '@components/common/FormElements/Button'
export default {
    name:'LearnMore',
    components: { HeaderText, SlicedSection, ListColumn, Button },
    data() {
        return {
          list: [
              { id:0,  headerLabel: 'Eliminate Fraud & Minimize Chargebacks ', fa_icon:['fas','users'], text:'Our fraud prevention tool with Non-invasive 3D technology, Blacklisting & Tokenization that will help optimize your conversion rates. Aff Builder\'s automated anti-fraud solution will help you distinguishing fraudsters from customers and apply Dynamic 3D Secure to high-risk payments, reducing the risk of illegal transactions. '},
              { id:1,  headerLabel: 'Global Payment Acceptance', fa_icon: ['fas','user-shield'], text:'Connect your website with Aff Builder and be ready to make the world your market within minutes. Through our value-added serviced for you and your customers, you can start accepting globally recognized payment options and cards in your store.'},
              { id:2,  headerLabel: 'Adaptable Payment Solution', fa_icon: ['fas','sort-amount-up'], text:'Aff Builder provides a flexible solution for companies of all sizes. With our experience in the digital and financial services, we can tailor our solution to the smallest detail to cater to the requirements of all niche industry verticals.  '}
          ]
        }
    }
}
</script>
