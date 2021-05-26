<template>
    <SlicedSection single-column class="getting-started">
        <h1>
            Power up your sales with payments through one platform
        </h1>
      <router-link :to="{name:'register'}">
        <Button class="custom-button-yellow" label="get started" />
      </router-link>
    </SlicedSection>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import Button from '@components/common/FormElements/Button'
export default {
    name:'LearnMore',
    components: { SlicedSection, Button },
    computed: {
      windowWidth() {
        return this.$store.getters['app/GET_WINDOW_WIDTH']
      }
    }
}
</script>
