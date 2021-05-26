<template>
    <SlicedSection single-column class="text-page-canvas"> 
        <slot />
    </SlicedSection>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
export default {
    name: 'TextCanvas',
    components: {
        SlicedSection
    }

}
</script>