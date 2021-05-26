<template>
    <SlicedSection single-column class="pricing-hero">
        <header-text size="xlg" class="text-center text-uppercase">Pricing built for businesses of all sizes. <br />Always know what you’ll pay.</header-text>

        <div class="cards-wrapper d-flex" style="color:#000">
            <payment-card title="high-risk merchants" link-label="contact sales" :click="() => handleClick('contacts')" >
                <high-risk />
            </payment-card>

            <payment-card class="purple" title="integrated" link-label="get started in minutes" :click="() => handleClick('register')" >
                <integrated />
            </payment-card>

            <payment-card title="customized" link-label="contact sales" :click="() => handleClick('contacts')" >
                <customized />
            </payment-card>
        </div>
    </SlicedSection>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'

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
