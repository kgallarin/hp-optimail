<template>
  <h1 :class="`${size} header-text-1`">
    <slot />
  </h1>
</template>

<script>
export default {
  name: "HeaderText",
  props: {
    size: {
      type: String,
      default: 'xl'
    }
  }
};
</script>
