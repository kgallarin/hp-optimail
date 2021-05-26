<template>
  <div :class="`sliced-section d-flex flex-column ${customClass}`">

    <!-- inner max 960 -->
    <div class="sliced-section-inner">
      <div v-if="singleColumn" class="single-column">
        <slot></slot>
      </div>
      <div v-else class="column-section d-flex justify-content-between align-items-center">
        <!-- left -->
        <div class="sliced-section--left">
          <slot name="slot-left" />
        </div>
        <!-- right -->
        <div class="sliced-section--right">
          <slot name="slot-right" />
        </div>
      </div>
    </div>

    <!-- not included in 960 -->
    <div v-if="!singleColumn" class="extra-el">
        <slot name="extra" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      singleColumn: {
        type: Boolean,
        default: false
      },
      customClass: {
        type: String,
        default: ''
      }
    }
  }
</script>
