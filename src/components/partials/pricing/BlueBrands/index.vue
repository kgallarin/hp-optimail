<template>
    <SlicedSection class="blue-section-brands">
        <template v-slot:slot-left>
            <header-text size="xmd" class="text-uppercase">Large payments volume or unique business model? </header-text>

            <p class="blue-section-content">
                If you process more than $100,000 per month or have <br v-if="windowWidth > 1200" />
                unique business needs such as microtransactions, <br v-if="windowWidth > 1200" />
                unusually large order values, or complex marketplace <br v-if="windowWidth > 1200" />
                models, get in touch. Our teams will review your current <br v-if="windowWidth > 1200" />
                statements and can help design a customized pricing <br v-if="windowWidth > 1200" />
                package.
            </p>
            <Button class="custom-button-yellow" label="get started" />
        </template>

        <template v-slot:slot-right>
            <white-brands-list />
        </template>
    </SlicedSection>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'
import Button from '@components/common/FormElements/Button'

import WhiteBrandsList from '../WhiteBrandsList'

export default {
    name:'BlueBrands',
    components: {
        HeaderText,
        SlicedSection,
        Button,
        WhiteBrandsList
    },
    computed: {
        windowWidth() {
            return this.$store.getters['app/GET_WINDOW_WIDTH']
        }
    }
}
</script>
