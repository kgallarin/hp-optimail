<template>
  <div :class="`gems-wrapper d-flex ${data.style}`">
    <div class="text-content">
      <strong class="text-content-headers">{{ data.textHeaders }}</strong>
      {{ data.texts }}
    </div>
    <div class="image-container">
      <img :src="require(`@images/diamond-images/${data.imageSource}.png`)" :alt="data.title">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gems',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
