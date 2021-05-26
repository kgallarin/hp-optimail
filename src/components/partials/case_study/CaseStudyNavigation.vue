<template>
    <div class="cs-nav-wrapper">
        <ul class="cs-brands-navigation" v-if="windowWidth > 1200">
            <li :class="[
                    { 'active': activeNav == nav.id },
                    { 'cs-navigation-item': true }
                ]" 
                v-for="nav in card_nav" 
                :key="nav.id"
            >
                <a 
                    href="#" 
                    :class="[
                        { 'cs-navigation-link': true }
                    ]" 
                    @click.prevent="setNav(nav)"
                > 
                    {{ nav.label }} 
                </a>
            </li>
        </ul>

        <!-- mobile navigation -->
        <b-dropdown v-else class="cs-dropdown">
            <template v-slot:button-content>
                {{ selected }}
            </template>
            <b-dropdown-item href="#"
                v-for="nav in card_nav" 
                :key="nav.id"
                @click.prevent="setNav(nav)"
            >
                {{ nav.label }} 
            </b-dropdown-item>
        </b-dropdown>
    </div> 
</template>
<script>
export default {
    name: 'BrandNavigation',
    data() {
        return {
            activeNav: 1,
            selected: 'All',
            card_nav: [
                { id: 1, label: 'All', key: 'all' },
                { id: 2, label: 'Facilitate', key: 'facilitate' },
                { id: 3, label: 'Me to Me', key: 'metome' },
                { id: 4, label: 'Recieve', key: 'recieve' },
                { id: 5, label: 'Send', key: 'send' },
                { id: 6, label: 'Send & Receive', key: 'send&recieve' },
            ]
        }
    },
    methods: {
        setNav(selected) {
            this.activeNav = selected.id
            this.selected = selected.label
            this.$emit('onSelectCategory', selected.key)
        }
    },
    computed: {
        windowWidth() {
            return this.$store.getters['app/GET_WINDOW_WIDTH']
        }
    }
}
</script>