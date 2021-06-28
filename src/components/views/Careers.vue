<template>
  <div class="careers">
    <img class="hero-image w-100" :src="require('@images/contactus/main.jpg')" alt="blog">
    <div class="careers-text-wrapper">
      <header-text class="text-uppercase mb-4" size="xmd">
        Work - Life balance is an intense driving force of every individual to succeed in their careers. 
        Here at Aff Builder, we believe that innovation, appreciation, well-being, health and happiness is a key to success.
      </header-text>
      <p class="mb-0">
        If you love challenges and thinking outside the box, come and join our rapidly growing team of professionals!
      </p>
      <p>Great success is possible when talents and challenges are matched with opportunities!</p>
      
      <router-link class="gold-link" :to="{ name: 'contacts' }">Contact us for career opportunities!</router-link>
    </div>
  </div>
</template>

<script>
import HeaderText from '@components/common/HeaderText'
import Card from '@components/common/Card'
export default {
  name: 'Careers',
  components: {
    Card,
    HeaderText
  }
}
</script>