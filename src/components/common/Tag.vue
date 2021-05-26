<template>
    <div :class="`bread-tag ${color}`">
        <p class="text">{{ text }}</p>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>
