<template>
    <div class="payment-card">
        <p class="payment-card-header">{{ title }}</p>

        <div class="payment-card-content">
            <slot />
        </div>

        <div class="payment-card-footer">
            <a href="#" class="payment-card-link gold-link" @click.stop="click">
                {{ linkLabel }}
                <svg height="20" width="20" class="ml-1 yellow-arrow">
                    <use
                        :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'"
                    />
                </svg>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'PaymentCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        linkLabel: {
            type: String,
            default: ''
        },
        click: {
          type: Function,
          default: () => {}
        }
    }
}
</script>
