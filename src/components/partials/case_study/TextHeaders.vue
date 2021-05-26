<template>
    <div class="cs-text-headers">
        <header-text class="text-center text-uppercase">
            {{ headerText }}
        </header-text>

        <p class="cs-content-text">            
            {{ contentText }} <br v-if="windowWidth > 1200" />
            <router-link :to="{name: routeTo }" href="#" class="gold-link">Click below to get started</router-link>.
        </p>
    </div>
</template>
<script>
import HeaderText from '@components/common/HeaderText'
export default {
    name: 'TextHeaders',
    props: {
        headerText: {
            type: String,
            default: 'Case Study'
        },
        contentText: {
            type: String,
            default: 'Lorem Ipsum dolor sit amet'
        },
        routeTo: {
            type: String,
            default: 'about'
        }
    },
    components: {
        HeaderText
    },
    computed: {
        windowWidth() {
            return this.$store.getters['app/GET_WINDOW_WIDTH']
        }
    }
}
</script>

