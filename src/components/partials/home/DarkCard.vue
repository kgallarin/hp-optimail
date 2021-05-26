<template>
    <div class="dark-card">
        <p class="dark-card-header">{{ header }}</p>
        <p class="dark-card-content">
           <slot />
        </p>
        <a href="#" class="dark-card-link" @click.prevent.stop="click">
            <svg height="20" width="20" class="card-w-icon--icon yellow-arrow">
                <use
                    :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'"
                />
            </svg>
            <p>{{ linkText }}</p>
        </a>
    </div>
</template>
<script>
export default {
    name: 'DarkCard',
    props: {
        header: {
            type: String,
            default: ''
        },
        linkText: {
            type: String,
            default: ''
        },
        click: {
            type: Function,
            default: () => {}
        }
    },
}
</script>
