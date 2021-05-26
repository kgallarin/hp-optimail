<template>
    <SlicedSection single-column class="payments-section" custom-class="bordered-bottom bordered-top">
        <div class="base-row-wrapper">
            <div class="base-row">
                <!-- please repeat this starting in .base-column if having more items -->
                <div class="base-column">
                    <Card
                        :fa_icon="['fas', 'file-alt']"
                        headerLabel="Recurring Payments"
                        text="Create multiple subscription plans to provide the best choices and improve customer retention."
                        iconSize="6x"
                    />
                </div>
                <!-- repeat end -->
                <div class="base-column">
                    <Card
                        :fa_icon="['fas', 'mobile-alt']"
                        headerLabel="All-in-one Solution"
                        text="A secured purchasing process with a quick checkout or custom form without redirecting."
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
