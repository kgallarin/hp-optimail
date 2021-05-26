<template>
    <SlicedSection single-column class="learn-more">
        <header-Text> Secure payment platform for all your needs </header-Text>

        <div class="list-container-wrapper">
            <div class="list-container">
                <template v-for="data in list" >
                <list-column
                    :key="data.id"
                    :fa_icon="data.fa_icon"
                    :headerLabel="data.headerLabel"
                    :text="data.text"
                    icon_size="4x"
                />
                </template>
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
                { id:0,  headerLabel: 'Eliminate Fraud & Minimize Chargebacks ', fa_icon:['fas','users'], text:'Our fraud prevention tool with Non-invasive 3D technology, Blacklisting & Tokenization that will help optimize your conversion rates. HydroPay’s automated anti-fraud solution will help you distinguishing fraudsters from customers and apply Dynamic 3D Secure to high-risk payments, reducing the risk of illegal transactions. '},
                { id:1,  headerLabel: 'Global Payment Acceptance', fa_icon: ['fas','user-shield'], text:'Connect your website with Hydropay and be ready to make the world your market within minutes. Through our value-added serviced for you and your customers, you can start accepting globally recognized payment options and cards in your store.'},
                { id:2,  headerLabel: 'Adaptable Payment Solution', fa_icon: ['fas','sort-amount-up'], text:'HydroPay provides a flexible solution for companies of all sizes. With our experience in the digital and financial services, we can tailor our solution to the smallest detail to cater to the requirements of all niche industry verticals.  '}
            ]
        }
    }
}
</script>
