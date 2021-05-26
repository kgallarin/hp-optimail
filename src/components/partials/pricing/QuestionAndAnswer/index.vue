<template>
    <SlicedSection single-column class="pricing-qa" custom-class="bordered-bottom">
        <questions-list />
    </SlicedSection>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'
import QuestionsList from './QuestionsList'

import WhiteBrandsList from '../WhiteBrandsList'

export default {
    name:'QuestionAndAnswer',
    components: {
        HeaderText,
        SlicedSection,
        QuestionsList
    }
}
</script>