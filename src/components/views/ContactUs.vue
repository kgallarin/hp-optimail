<template>
  <div class="contactus-wrapper">
    <!-- hero image -->
    <img class="hero-image w-100" :src="require('@images/contactus/main.jpg')" alt="blog">

    <!-- section 2 -->

    <form-section />
    <!-- section 3 -->

    <google-map />
    <!-- <getting-started/> -->

  </div>
</template>

<script>
import FormSection from '@components/partials/contactus/FormSection'
import GettingStarted from '@components/partials/home/GettingStarted'
import GoogleMap from '@components/partials/contactus/GoogleMap'
  export default {
    name: 'ContactUs',
    components: {
      GettingStarted,
      FormSection,
      GoogleMap
    }
  }
</script>


<style lang="scss">
  .vue-map-container {
    width: 100%;
    height: 636px;
  }

</style>
