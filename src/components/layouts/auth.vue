<template>
  <div class="auth-layout">
      <div class="main-content">
        <div class="header d-flex align-items-center justify-content-center">
            <router-link :to="{ name: 'home' }">
              <b-img height="auto" width="150" :src="require('@images/affiliate/aff_logo_white.png')" alt="Aff Builder"></b-img>
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
