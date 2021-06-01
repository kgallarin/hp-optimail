<template>
  <SlicedSection single-column class="included-section">
    <div class="included-tab tab-view">
        <header-text size="xmd" class="text-center text-uppercase">
            What’s included
        </header-text>

        <p class="included-tab-sub">Get 100+ features out of the box with Stripe’s integrated per-transaction pricing</p>

        <check-list :listData="listData" />

        <div class="rsearch-study">
            <img :src="require('@svg/research.svg')" alt="Aff Builder" />
            <div class="text-wrap d-flex align-items-center">
               <div class="wrapper">
                    <span class="hl">An IDC study</span> shows that, on average, businesses using Stripe attribute a <span class="hl">6.7% increase</span> in revenue to the Aff Builder platform.
               </div>
            </div>
        </div>
    </div>
  </SlicedSection>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
import CheckList from '@components/common/CheckList'
import SlicedSection from '@components/common/SlicedSection'
export default {
    name:'Included',
    data() {
      return {
        listData: [
            {
                id: 0,
                title: 'Tools to build',
                icon: ['fas','book-open'],
                check_list: [
                    'Embeddable checkout',
                    'Custom UI toolkit',
                    'Simplified PCI compliance',
                    'Invoice support',
                ]
            },
            {
                id: 1,
                title: 'Tools to build optimized checkout flows',
                icon:['fas','users'],
                check_list: [
                    'Embeddable checkout',
                    'Custom UI toolkit',
                    'Simplified PCI compliance',
                    'Invoice support',
                ]
            },
            {
                id: 2,
                title: 'Tools to build optimized checkout flows',
                icon: ['fas','user-shield'],
                check_list: [
                    'Embeddable checkout',
                    'Custom UI toolkit',
                    'Simplified PCI compliance',
                    'Invoice support',
                ]
            },
            {
                id: 3,
                title: 'Tools to build optimized checkout flows',
                icon: ['fas','book-open'],
                check_list: [
                    'Embeddable checkout',
                    'Custom UI toolkit',
                    'Simplified PCI compliance',
                    'Invoice support',
                ]
            },
            {
                id: 4,
                title: 'Tools to build optimized checkout flows',
                icon:['fas','users'],
                check_list: [
                    'Embeddable checkout',
                    'Custom UI toolkit',
                    'Simplified PCI compliance',
                    'Invoice support',
                ]
            },
            {
                id: 5,
                title: 'Tools to build optimized checkout flows',
                icon: ['fas','user-shield'],
                check_list: [
                    'Embeddable checkout',
                    'Custom UI toolkit',
                    'Simplified PCI compliance',
                    'Invoice support',
                ]
            }
        ]
      }
    },
    components: {
        HeaderText,
        CheckList,
        SlicedSection
    }
}
</script>
