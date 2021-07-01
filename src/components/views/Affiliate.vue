<template>
    <div class="pricing-wrapper" @scroll="handleScroll">
        <!-- section 1 -->
        <pricing-hero />
        
        <!-- <tab control /> -->
        <!-- <div class="tc-main-container">
          <tab-control
            ref="tabControl"
            @onSetActiveTab="handleActiveTab"
            :class="[
              { 'active': tcOnScroll }
            ]"
          />
        </div> -->
        
        <receipt-card 
          sub-text="SmAIrtlink© is not your typical affiliate link. With Affi Builder’s offers, SmAIrtlink© offers guaranteed best deals to send to your clients and customers. 
            Each unique link features best top-converting deals and rewarding products based on your target clients and customer’s geographical location, device, and preferences. 
            SmAIrtlink© are automated and optimized to boost return on investment for your affiliate campaigns"
          >
            <template #headerTitle>
              SmAIrtlink<span class="copy">©</span>
            </template>
          </receipt-card>

        <!-- <included id="included" ref="included" /> -->

        <!-- Receipt cards starts -->
        <!-- <receipt-card id="receiptCard" ref="receiptCard" /> -->

        <!-- blue wave with brands -->
        <!-- <blue-brands ref="blueBrands" /> -->

        <!-- faq list -->
        <!-- <question-and-answer id="qa" ref="qa" /> -->

        <!-- about us section -->
        <!-- <about-us id="aboutus" ref="aboutus" /> -->

        <!-- getting started section  -->
        <getting-started/>
    </div>
</template>
<script>
import PricingHero from '@components/partials/pricing/PricingHero'
// tab controls
import TabControl from '@components/partials/pricing/ScrollContents/TabControl'
// scroll elements
import Included from '@components/partials/pricing/ScrollContents/Included'
import ReceiptCard from '@components/partials/pricing/ScrollContents/ReceiptCard'
import BlueBrands from '@components/partials/pricing/BlueBrands'
import QuestionAndAnswer from '@components/partials/pricing/QuestionAndAnswer'

// imported from home
import GettingStarted from '@components/partials/home/GettingStarted'
import AboutUs from '@components/partials/home/AboutUs'

export default {
    name:'Affiliate',
    components: {
        PricingHero,
        GettingStarted,
        BlueBrands,
        QuestionAndAnswer,
        AboutUs,
        Included,
        ReceiptCard,
        TabControl
    },
    data() {
      return {
        tcOnScroll: false
      }
    },
    methods: {
      handleActiveTab(event) {
        this.$nextTick(() => {
        let includedScrollPosition = this.$refs[`${event}`].$el.id
          this.$nextTick(() => {
            if(this.windowWidth > 1200) {
              this.$scrollTo(`#${includedScrollPosition}`, 350, {
                container: document.getElementsByTagName('body')['0'],
                easing: 'linear',
                offset: -120
              })
            }else {
              this.$scrollTo(`#${includedScrollPosition}`, 350, {
                container: document.getElementsByTagName('body')['0'],
                easing: 'linear',
                offset: 0
              })
            }
          })
        })
      },
      handleScroll(e) {
        const tabControl = this.$refs.tabControl.$el.offsetTop
        const includedScrollPosition = this.$refs.included.$el.offsetTop
        const aboutusScrollPosition = this.$refs.aboutus.$el.offsetTop
        const qaScrollPosition = this.$refs.qa.$el.offsetHeight

        let docElScrollPosition = e.target.scrollingElement.scrollTop

        if (docElScrollPosition < includedScrollPosition) {
           this.tcOnScroll = false
        }
        if(docElScrollPosition > tabControl && docElScrollPosition < aboutusScrollPosition && docElScrollPosition > includedScrollPosition) {
          this.tcOnScroll = true
        }
        if(this.windowWidth > 1200 && docElScrollPosition > aboutusScrollPosition - 100) {
          this.tcOnScroll = false
        }
        if(this.windowWidth < 1200 && docElScrollPosition > aboutusScrollPosition - 800) {
          this.tcOnScroll = false
        }
      },
  },
  computed: {
    windowWidth() {
        return this.$store.getters['app/GET_WINDOW_WIDTH']
    }
  },
  created() {
    // window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
