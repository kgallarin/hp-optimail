<template>
  <div class="contactus-wrapper">
    <!-- hero image -->
    <img class="hero-image w-100" :src="require('@images/contactus/main.jpg')" alt="blog">

    <!-- section 2 -->

    <form-section />
    <!-- section 3 -->

    <!-- <google-map /> -->
    <iframe 
      id="map-frame"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1676108947077!2d-106.9570974479505!3d44.797772685578735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0xd7c55bd374d4b750!2s30%20N%20Gould%20St%20ste%20r%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sth!4v1627034476081!5m2!1sen!2sth"
      allowfullscreen="false" 
      loading="lazy" />
    <!-- <getting-started/> -->

  </div>
</template>

<script>
import FormSection from '@components/partials/contactus/FormSection'
import GettingStarted from '@components/partials/home/GettingStarted'
// import GoogleMap from '@components/partials/contactus/GoogleMap'
  export default {
    name: 'ContactUs',
    components: {
      GettingStarted,
      FormSection,
      // GoogleMap
    }
  }
</script>

<!-- 
<style lang="scss">
  .vue-map-container {
    width: 100%;
    height: 636px;
  }

</style> -->



