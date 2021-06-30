<template>
    <SlicedSection single-column class="payments-section" custom-class="bordered-bottom bordered-top">
        <div class="base-row-wrapper">
            <div class="base-row">
                <!-- please repeat this starting in .base-column if having more items -->
                <div class="base-column">
                    <Card
                        :fa_icon="['fas', 'users']"
                        headerLabel="Multi-access and team work"
                        text="Make all relevant data from your platform easily available to your team members or partners. Assign access based on roles & provide affiliates data access in real-time."
                        iconSize="5x"
                    />
                </div>
                <!-- repeat end -->
                <div class="base-column">
                    <Card
                        :fa_icon="['fas', 'mobile-alt']"
                        headerLabel="Native tracking capabilities"
                        text="Track affiliates using first-party data and server side tracking., no pixels, no digital fingerprints required and of course, no 3rd party cookies."
                        iconSize="6x"
                    />
                </div>
            </div>
        </div>
    </SlicedSection>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import Card from '@components/common/Card'

export default {
    name:'Payments',
    components: { SlicedSection, Card }
}
</script>
