<template>
  <ul v-if="windowWidth >= 1200" :class="[{ 'white-menu-list': whiteNav }, { 'menu-list mb-0 d-flex': true }]">
    <template v-for="menu in menu_links">
      <menu-item @currentlyHovered="handleCurrent" :activeHovered="currentActive" :data="menu" :key="menu.id" :click="(e) => handleMenu(e)" />
    </template>
  </ul>

  <menu-item-mobile v-else :data="menu_links" :click="(e) => handleMenu(e)" />
</template>
<script>
import MenuItem from './MenuItem'
import MenuItemMobile from './MenuItemMobile'
  export default {
    name: 'MenuList',
    props: {
      whiteNav: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        onHover: false,
        currentActive: null,
        menu_links: [
          { id:"0",
            label: "Home",
            component_link:'home',
            sub_links: [
              // {
              //   id: 0,
              //   title: 'Payments',
              //   desc: 'description here',
              //   fa_icon: ['fas', 'address-card'],
              //   external_link:'',
              //   component_link:'payments'
              // },
              // {
              //   id: 1,
              //   title: 'Subscriptions',
              //   desc: 'description here',
              //   fa_icon:['fas', 'money-check-alt'],
              //   external_link:'',
              //   component_link:'subscription'
              // },
              // {
              //   id: 2,
              //   title: 'FX Conversions',
              //   desc: 'description here',
              //   fa_icon:['fas', 'exchange-alt'],
              //   external_link:'',
              //   component_link:'currency_conversions'
              // },
              // { id: 3,
              //   title: 'Mass Payouts',
              //   desc: 'description here',
              //   fa_icon:['fas', 'user-shield'],
              //   external_link:'',
              //   component_link:'mass_payouts'
              // },
              // { id: 4,
              //   title: 'Integration',
              //   desc: 'description here',
              //   fa_icon:['fas', 'user-shield'],
              //   external_link:'',
              //   component_link:'integration'
              // }
            ]
          },
          { id:"1",
            label: "features",
            component_link:'features',
            sub_links: []
          },
          { id:"2",
            label: "platform",
            component_link:'',
            sub_links: [
              {
                id: 0,
                title: 'Affiliate',
                desc: 'payout periods, payout methods',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'pricing'
              },
              {
                id: 1,
                title: 'Payout terms',
                desc: 'payout periods, payout methods',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'payout'
              },
            ]
          },
          { id:"3",
            label: "about Us",
            component_link:'',
            sub_links: [
              {
                id: 0,
                title: 'Company',
                desc: 'Mission and goals',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'about'
              },
              {
                id: 1,
                title: 'Contact us',
                desc: 'we\'re here to help',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'contacts'
              },
            ]
          },
          { id:"4",
            label: "careers",
            component_link:'careers',
            sub_links: []
          }
        ]
      }
    },
    methods: {
      handleMenu(e) {
        if(this.$route.name !== e && e !== '') {
          this.$router.push({ name: e })
        }
      },
      handleCurrent(e) {
        this.currentActive = e
      }
    },
    computed: {
      windowWidth() {
        return this.$store.getters['app/GET_WINDOW_WIDTH']
      }
    },
    components: {
      MenuItem,
      MenuItemMobile
    }
  }
</script>
