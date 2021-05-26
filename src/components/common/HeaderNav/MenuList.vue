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
            label: "payments",
            component_link:'',
            sub_links: [
              {
                id: 0,
                title: 'Payments',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'payments'
              },
              {
                id: 1,
                title: 'Subscriptions',
                desc: 'description here',
                fa_icon:['fas', 'money-check-alt'],
                external_link:'',
                component_link:'subscription'
              },
              {
                id: 2,
                title: 'FX Conversions',
                desc: 'description here',
                fa_icon:['fas', 'exchange-alt'],
                external_link:'',
                component_link:'currency_conversions'
              },
              { id: 3,
                title: 'Mass Payouts',
                desc: 'description here',
                fa_icon:['fas', 'user-shield'],
                external_link:'',
                component_link:'mass_payouts'
              },
              { id: 4,
                title: 'Integration',
                desc: 'description here',
                fa_icon:['fas', 'user-shield'],
                external_link:'',
                component_link:'integration'
              }
            ]
          },
          { id:"1",
            label: "pricing",
            component_link:'pricing',
            sub_links: []
          },
          { id:"2",
            label: "developers",
            component_link:'',
            sub_links: [
              {
                id: 0,
                title: 'Documentation',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:''
              },
              {
                id: 1,
                title: 'API Status',
                desc: 'description here',
                fa_icon:['fas', 'money-check-alt'],
                external_link:'',
                component_link:''
              },
              {
                id: 2,
                title: 'API Changelog',
                desc: 'description here',
                fa_icon:['fas', 'exchange-alt'],
                external_link:'',
                component_link:''
              }
            ]
          },
          { id:"3",
            label: "Customers",
            component_link:'',
            sub_links: [
              {
                id: 0,
                title: 'eCommerce',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'ecommerce'
              },
              {
                id: 1,
                title: 'SaaS and Start-ups',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'start_ups'
              },
              {
                id: 2,
                title: 'Digital products',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'digital_products'
              },
              {
                id: 3,
                title: 'Online Dating',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'online_dating'
              },
              {
                id: 4,
                title: 'iGaming',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'gaming'
              },
              {
                id: 5,
                title: 'High-Risk',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'high_risk'
              }
            ]
          },
          { id:"4",
            label: "company",
            component_link:'',
            sub_links: [
              {
                id: 0,
                title: 'About us',
                desc: 'description here',
                fa_icon: ['fas', 'address-card'],
                external_link:'',
                component_link:'about'
              },
              {
                id: 2,
                title: 'Blog',
                desc: 'description here',
                fa_icon: ['fas', 'phone'],
                external_link:'',
                component_link:'blog'
              },
              {
                id: 3,
                title: 'Case studies',
                desc: 'description here',
                fa_icon: ['fas', 'phone'],
                external_link:'',
                component_link:'case_study'
              },
              {
                id: 4,
                title: 'Contact us',
                desc: 'description here',
                fa_icon: ['fas', 'phone'],
                external_link:'',
                component_link:'contacts'
              }
            ]
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
