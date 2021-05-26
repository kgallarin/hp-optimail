<template>
    <SlicedSection single-column custom-class="bordered-bottom case-study-content">
        <case-study-brand-list />
    </SlicedSection>
</template>
<script>
import CaseStudyBrandList from './BrandCards/CaseStudyBrandsList'
import SlicedSection from '@components/common/SlicedSection'
export default {
    name: 'CaseStudyContent',
    components: {
        CaseStudyBrandList,
        SlicedSection
    }
}
</script>