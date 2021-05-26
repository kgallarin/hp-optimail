<template>
  <div class="card-w-icon d-flex">
     <div class="icon-container">
       <font-awesome-icon :icon="fa_icon" :size="iconSize" />
     </div>
    <div class="card-w-icon-content">
      <header class="card-w-icon-header">{{ headerLabel }}</header>
      <template v-if="informative">
        <p class="card-w-icon-description">
          <slot />
        </p>
      </template>
      <template v-else>
        <p class="card-w-icon-description">
          {{ text }}
        </p>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      fa_icon: {
        type: Array,
        default: () => []
      },
      headerLabel: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      iconSize: {
        type: String,
        default: ''
      },
      informative: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
