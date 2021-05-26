<template>
  <div class="wave-container">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="#fff" />
        <use xlink:href="#gentle-wave" x="48" y="2" fill="rgba(140,130,195,0.4)" />
        <use xlink:href="#gentle-wave" x="48" y="1" fill="rgba(149,211,232,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="4" fill="rgba(7,140,250,1)" />
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Waves'
  }
</script>
