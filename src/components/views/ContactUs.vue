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
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.5201269744402!2d100.5712672520265!3d13.807776990263706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d8d8b4c5367%3A0x52796fe53db7d68b!2sMoebius%20Development%20Inc!5e0!3m2!1sen!2sth!4v1624935957873!5m2!1sen!2sth" 
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



