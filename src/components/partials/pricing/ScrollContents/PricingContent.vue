<template>
        

</template>
<script>
import HeaderText from '@components/common/HeaderText'


import TabControl from './TabControl'

export default {
    name: 'PricingContent',
    data() {
        return {
            activeTab: 'included',
        }
    },
    components: {
        HeaderText,
        SlicedSection,
        TabControl,
        // ReceiptCard,
        // Included
    },
    methods: {
        handleActiveTab(event) {
            this.activeTab = event
        },
        isTabActive(tab_view_name) {
            return this.activeTab === tab_view_name
        }
    }
}
</script>
