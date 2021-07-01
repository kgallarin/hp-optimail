<template>
  <div class="animated-ring-wrapper">
    <!-- <span class="particles1"></span> -->
      <img class="ring ring-top" :src="require('@svg/animation_ring/circle-top.svg')" alt="Affi Builder">
      <img class="ring-bottom" :src="require('@svg/animation_ring/cirlce-bot-light.svg')" alt="Affi Builder">


      <div class="particles-container">
          <div class="particles-container-inner position-relative w-100 h-100">
            <span class="particles2"></span>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'AnimatedRing'
  }
</script>
