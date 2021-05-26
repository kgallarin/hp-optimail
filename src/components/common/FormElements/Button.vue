<template>
  <b-button class="custom-button text-uppercase" variant="outline-primary" @click.stop="click">
    {{ label }}
  </b-button>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      click: {
        type: Function,
        default: () => {}
      }
    },
    mounted() { }
  }
</script>
