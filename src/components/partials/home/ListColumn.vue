<template>
  <div class="list-column d-flex">
     <div class="icon-container">
       <font-awesome-icon :icon="fa_icon" :size="icon_size" />
     </div>
    <div class="list-column-content">
      <header class="list-column-header">{{ headerLabel }}</header>
      <p class="list-column-description">
        {{ text }}
      </p>
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
      icon_size: {
        type: String,
        default:''
      }
    }
  }
</script>
