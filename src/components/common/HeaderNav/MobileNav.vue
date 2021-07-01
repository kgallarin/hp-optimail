<template>
    <div class="mobile-menu">
      <div class="mobile-menu-inner">
          <menu-list />
      </div>
    </div>
</template>
<script>
import MenuList from '@components/common/HeaderNav/MenuList'

  const appBody = document.getElementsByTagName('body')['0']
export default {
    name:'MobileNav',
    components: {
      MenuList
    },
    created(){
      appBody.style.overflow = 'hidden'
    },
    beforeDestroy() {
      appBody.style.overflow = 'auto'
    }

}
</script>
