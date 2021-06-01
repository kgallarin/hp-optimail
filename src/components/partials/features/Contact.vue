<template>
  <SlicedSection class="feature-contact-section">
    <template v-slot:slot-left>
          <animated-ring />
    </template>
    <template v-slot:slot-right>
        <p class="text-desc color-gray mb-5">
          <strong>{{ headerText }}</strong>
        </p>
        
        <p class="text-desc color-gray mb-5" v-for="text in textDesc" :key="text">
          {{ text }}
        </p>
        <!-- <span class="team-signature">
          HydroPay Team
        </span> -->
    </template>
  </SlicedSection>
</template>
<script>
import AnimatedRing from './AnimatedRing'

import SlicedSection from '@components/common/SlicedSection'
import HeaderText from '@components/common/HeaderText'
import CheckList from '@components/common/CheckList'
  export default {
    name: 'Contact',
    props: {
      headerText: {
        type: String,
        default:'Simplified Online Payment'
      },
      textDesc: {
        type: Array,
        default: () => [
          'With today\'s developing technologies and a lot of payment options checkouts don\'t have to be a complicated process before you reach the last part and complete your shopping experience.',
          'With Aff Builder\'s secured and simplified online payment procedure, no unnecessary page redirection, you can prevent your customers from having abandoned checkouts. Only vital information is required to minimize interruptions with very few clicks possible, making their checkout experience sleek and easy - means more conversion for your business.'
          ]
      }
    },
    components: {
      SlicedSection,
      HeaderText,
      AnimatedRing
    }
  }
</script>
