<template>
    <SlicedSection class="aboutus-section" single-column>
        <div class="base-row-wrapper">
            <div class="base-row">
                <div class="base-column">
                    <dark-card
                        :click="() => goTo('features')"
                        header="Limitless Possibilities "
                        linkText="Learn about Affiliate Builder's products"
                    >
                        Easily integrate Affiliate Builder into your online store and start accepting global payments. 
                        Take advantage of our reporting tools and gain unique insights into the purchasing behavior of your customers. 
                        Use all our features and workflows and unlock all possibilities at your disposal to see your businesses raising performance.
                    </dark-card>
                </div>
                <div class="base-column">
                    <dark-card
                        :click="() => goTo('about')"
                        header="Digital Generation"
                        linkText="More about us"
                    >
                        Technology is in our DNA. As digital payments are evolving dynamically & daily, we have embraced the digital technologies since day one.
                        With our innovative solutions, you can reach your full online potential and grow your consumer base around the world.
                    </dark-card>
                </div>
            </div>
        </div>
    </SlicedSection>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import DarkCard from '../DarkCard'
export default {
    name:'AboutUs',
    components: { SlicedSection, DarkCard },
    methods: {
        goTo(link) {
            this.$router.push({ name: link });
        }
    }
}
</script>
