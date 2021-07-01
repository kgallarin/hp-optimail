<template>
    <SlicedSection class="aboutus-section" single-column>
        <div class="base-row-wrapper">
            <div class="base-row">
                <div class="base-column">
                    <dark-card
                        :click="() => goTo('features')"
                        header="Limitless possibilities "
                        linkText="Product details"
                    >
                      Easily integrate Affi Builder into your online store and start accepting global traffic. 
                      Take advantage of our reporting tools and gain unique insights into the purchasing behavior of your customers. 
                      Use all our features and workflows and unlock all possibilities at your disposal to see your businesses raising performance.
                    </dark-card>
                </div>
                <div class="base-column">
                    <dark-card
                        :click="() => goTo('about')"
                        header="Digital generation"
                        linkText="More about us"
                    >
                        Technology is in our DNA. 
                        As affiliate marketing platforms are evolving dynamically, we have embraced digital technology since day one. 
                        With our innovative solutions, you can reach your full marketing potential and grow your consumer base around the world.
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
