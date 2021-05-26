<template>
    <div class="case-study-wrapper">
        <!-- headers  -->
        <text-headers />

        <!-- for background -->
        <case-study-navigation @onSelectCategory="handleFilterKey" />

        <case-study-content />

        <!-- section 3 -->
        <about-us/>

        <!-- section 4 -->
        <getting-started/>
    </div>
</template>
<script>
import CaseStudyContent from '@components/partials/case_study/CaseStudyContent'
import AboutUs from '@components/partials/home/AboutUs'
import GettingStarted from '@components/partials/home/GettingStarted'
import TextHeaders from '@components/partials/case_study/TextHeaders'
import CaseStudyNavigation from '@components/partials/case_study/CaseStudyNavigation'

export default {
    name: 'CaseStudy',
    components: {
        CaseStudyContent,
        AboutUs,
        GettingStarted,
        TextHeaders,
        CaseStudyNavigation
    },
    methods: {
        handleFilterKey(key){
            this.$EventBus.$emit('setFilterCategory', key)
        }
    }
}
</script>
