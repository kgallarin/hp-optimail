<template>
    <SlicedSection class="team-wrapper">
        <template v-slot:slot-left>
            <div class="image-container">
                <img :src="require('@images/about/man.png')" alt="Hydropay Team" class="team-image">
            </div>
        </template>
        <template v-slot:slot-right>
            <p class="team-content-text">
                &quot;Just having satisfied customers isn&#39;t good enough anymore. We know that for a booming business, it&#39;s not only you who needs to be happy, but it&#39;s also your customers who need to be devoted users.&quot;
            </p>
            <span class="team-signature">HydroPay Team</span>

        </template>
    </SlicedSection>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import HeaderText from '@components/common/HeaderText'
export default {
    name: 'TeamSection',
    components: {
        SlicedSection,
        HeaderText
    }
}
</script>
