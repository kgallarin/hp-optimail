<template>
    <SlicedSection single-column class="pricing-hero">
        <header-text size="xlg" class="text-center text-uppercase">
          Enhance and Optimize Your Campaign With the Globe’s Fastest Growing Affiliate Marketing Platform Through Exceptional Technology with Human Touch
        </header-text>
        <p class="hero-content-text">
          As one of the fastest growing affiliate marketing platforms combined with years of experience, Aff Builder ensures proper connection to every advertisers and products optimizing your sales and reaching your target audience worldwide.
        </p>
        <div class="cards-wrapper d-flex" style="color:#000">
          <included ref="included" />
        </div>
      
        <!-- <div class="cards-wrapper d-flex" style="color:#000">
            <payment-card title="high-risk merchants" link-label="contact sales" :click="() => handleClick('contacts')" >
                <high-risk />
            </payment-card>

            <payment-card class="purple" title="integrated" link-label="get started in minutes" :click="() => handleClick('register')" >
                <integrated />
            </payment-card>

            <payment-card title="customized" link-label="contact sales" :click="() => handleClick('contacts')" >
                <customized />
            </payment-card>
        </div> -->
    </SlicedSection>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'
import Included from '@components/partials/pricing/ScrollContents/Included'

// payment card
import PaymentCard from '../PaymentCard'

// contents
import HighRisk from './PaymentCardContent/HighRisk'
import Integrated from './PaymentCardContent/Integrated'
import Customized from './PaymentCardContent/Customized'

export default {
    name: 'PricingHero',
    components: {
        HeaderText,
        SlicedSection,
        PaymentCard,
        Included,
        HighRisk,
        Integrated,
        Customized
    },
    methods: {
      handleClick(name) {
          this.$router.push({ name: name })
      }
    }
}
</script>
