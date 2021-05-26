<template>
  <div class="auth-layout">
      <div class="main-content">
        <div class="header d-flex align-items-center justify-content-center">
            <router-link :to="{ name: 'home' }">
                <b-img class="main-logo" height="30" width="136" :src="require('@svg/hydropay-white.svg')" alt="Hydropay"></b-img>
            </router-link>
        </div>
        <slot />
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {}

};
</script>
