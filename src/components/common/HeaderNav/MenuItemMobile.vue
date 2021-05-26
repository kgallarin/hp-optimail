<template>
  <div class="menu-item-mobile">
    <template v-if="!sub_links_toggle">
      <ul class="menu-item-ul">
        <li v-for="menu in data" :class="[activeNav !== null && activeNav.id === menu.id ? 'active' : '', 'menu-item-li']">
          <a href="#" @click.prevent="clickNav(menu)" class="menu-item"> {{ menu.label }} </a>
          <svg v-if="menu.sub_links.length > 0" height="7" width="12" class="mr-1 chevron-icon">
            <use :xlink:href="require('@svg/sprites/common.svg') + '#chevron'"
            />
          </svg>
        </li>
      </ul>
      <Button variant="outline" label="login" class="" :click="() => handleLogin()" />
    </template>


    <div v-if="sub_links_toggle" class="sub_links-views">
        <div class="subs-mobile" v-for="sub_menu in activeNav.sub_links">
          <!-- {{ sub_menu }} -->
          <a href="#" class="sub_links--link" @click.prevent="handleMobileSubClick(sub_menu)">
            <div class="d-flex">
              <font-awesome-icon class="subs-mobile-icon" :icon="sub_menu.fa_icon" size="2x" />
              <div class="contents">
                <p class="contents--title">{{ sub_menu.title }}</p>
                <p class="contents--desc">{{ sub_menu.desc }}</p>
              </div>
            </div>
          </a>
        </div>
    </div>
  </div>
</template>


<script>
import Button from '@components/common/FormElements/Button'
  export default {
    name: 'MenuItemMobile',
    data() {
      return {
        activeNav: null,
        sub_links_toggle: false
      }
    },
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    components: { Button },
    methods: {
      clickNav(menu) {
        this.activeNav = menu
        if(menu.sub_links.length > 0) {
          this.sub_links_toggle = true
          this.$EventBus.$emit('subLinksNavEnabled')
        }else {
          if(this.$route.name !== menu.component_link && menu.component_link !== '') {
            this.$router.push({ name: menu.component_link })
          }
          this.$EventBus.$emit('closeMobileNav')
        }
      },
      handleSubLinkBack() {
        this.sub_links_toggle = false
      },
      handleHamburger(status) {
        if(!status){
          this.sub_links_toggle = false
        }
      },
      handleMobileSubClick(menu) {
        if(menu.external_link !== '') {
              window.open(menu.external_link,'_blank')
          }else {
              if(this.$route.name !== menu.component_link && menu.component_link !== '') {
                  this.$router.push({ name: menu.component_link })
              }
          }
          this.handleSubLinkBack()
          this.$EventBus.$emit('closeMobileNav')
      },
      handleLogin() {
        this.$router.push({ name: 'login' })
        this.$EventBus.$emit('closeMobileNav')
      }
    },
    created() {
      this.$EventBus.$on('subLinkGoBack', this.handleSubLinkBack)
      this.$EventBus.$on('toggleMobileNav', this.handleHamburger)

    },
    beforeDestroy() {
      this.$EventBus.$off('subLinkGoBack', this.handleSubLinkBack)
      this.$EventBus.$off('toggleMobileNav', this.handleHamburger)
    }
  }
</script>
