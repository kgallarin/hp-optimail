<template>
  <div class="code-panel">
    <div class="header">{{ title }}</div>
    <div class="content-body">
        <slot/>
    </div>
    <div class="footer d-flex justfy-content-between">
      <a href="#" class="gold-link">View our developer API resources</a>
      <span class="divider">|</span>
      <a href="#" class="gold-link">Setup a Sandbox account</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CodePanel',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
