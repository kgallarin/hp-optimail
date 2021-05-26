<template>
    <div class="pcard-content integrated">
        <p class="pcard-content-headers text-center">
            Access a complete payments <br /> platform with simple, <br /> pay-as-you-go pricing
        </p>

        <charge-calc />

        <div class="details-list-wrapper">
            <ul class="details-list">
                <li class="details-list-item">
                    <div class="details-list-icon">
                        <font-awesome-icon :icon="['fas','money-bill-wave']" size="lg" />
                    </div>
                    <div class="details-list-text">
                        Everything you need to manage payments
                    </div>
                </li>
                <li class="details-list-item">
                    <div class="details-list-icon">
                        <font-awesome-icon :icon="['fas','forward']" size="lg" />
                    </div>
                    <div class="details-list-text">
                        Get hundreds of feature updates each year
                    </div>
                </li>
                <li class="details-list-item">
                    <div class="details-list-icon">
                        <font-awesome-icon :icon="['fas','star']" size="lg" />
                    </div>
                    <div class="details-list-text">
                        No setup fees, monthly fees, or hidden fees
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import ChargeCalc from '@components/partials/pricing/ChargeCalc'
export default {
    name:'Integrated',
    components: {
        ChargeCalc
    }
}
</script>