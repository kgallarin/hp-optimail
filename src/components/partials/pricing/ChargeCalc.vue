<template>
    <div class="charge-calculation">
        <div class="calculation-numbers d-flex align-items-center">
            <span class="percentage">2.9%</span>
            <span class="operator">+</span>
            <span class="amount">30¢</span>
        </div> 

        <p class="detail">Per successful card charge</p>
    </div>
</template>
<script>
export default {
    name:'charge-calc',
    props: {
        percentage: {
            type: String
        },
        operator: {
            type: String
        },
        amount: {
            type: String
        }
    }
}
</script>