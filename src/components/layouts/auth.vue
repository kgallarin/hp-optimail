<template>
  <div class="auth-layout">
      <div class="main-content">
        <div class="header d-flex align-items-center justify-content-center">
            <router-link :to="{ name: 'home' }">
              <b-img height="40" width="141" :src="require('@images/affiliate/aff_logo_white.png')" alt="Affiliate builder"></b-img>
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
