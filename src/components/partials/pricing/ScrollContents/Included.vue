<template>
  <SlicedSection single-column class="included-section">
    <div class="included-tab tab-view">
        <header-text size="xmd" class="text-center text-uppercase">
            Being one of our networks has a lot of benefits:
        </header-text>

        <!-- <p class="included-tab-sub">Get 100+ features out of the box with Stripe’s integrated per-transaction pricing</p> -->

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
                title: '24/7 Customer service',
                icon: ['fas','user-clock'],
                check_list: [
                  'Reach our professional customer service department if you have any questions regarding our business, your status or perks',
                ]
            },
            {
                id: 1,
                title: 'Affiliate manager assistance',
                icon:['fas','hands-helping'],
                check_list: [
                    'We have a team of highly qualified with years of experience account managers to provide you personalized assistance that is best suited for your geographical target location and traffic.',
                ]
            },
            {
                id: 2,
                title: 'Hundreds of offers from top brands',
                icon: ['fas','medal'],
                check_list: [
                    'Aff Builder has years of concrete partnerships with hundreds of advertisers and client partners that have exclusive offers only for us.',
                ]
            },
            {
                id: 3,
                title: 'Exclusive offers and promotions',
                icon: ['fas','user-tag'],
                check_list: [
                    'Our affiliate marketing platform caters to a wide range of industries, whether it’s e-commerce, mobile or web dating app, mobile games, our clients and partners have exclusive offers and promotional campaigns towards its affiliates.',
                ]
            },
            {
                id: 4,
                title: 'Life-time referral program bonus',
                icon:['fas','user-plus'],
                check_list: [
                    'Refer friends or anyone with your referral link and guaranteed bonuses on all their earnings.',
                ]
            },
            {
                id: 5,
                title: 'Quick and detailed reporting',
                icon: ['fas','edit'],
                check_list: [
                    'Our stats platform provides you with detailed information about your data, traffic conversation and how much sales and converts your affiliates and promotional links made.',
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
