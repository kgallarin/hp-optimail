<template>
  <div class="auth-layout">
      <div class="main-content">
        <alert-notif />
        <div class="header d-flex align-items-center justify-content-center">
            <router-link :to="{ name: 'home' }">
              <b-img height="auto" width="150" :src="require('@images/affiliate/aff_logo_white.png')" alt="Affi Builder"></b-img>
            </router-link>
        </div>
        <slot />
      </div>
  </div>
</template>

<script>
  import  AlertNotif from '@components/common/AlertNotif'
export default {
  name: '',
  components: { AlertNotif },
};
</script>
