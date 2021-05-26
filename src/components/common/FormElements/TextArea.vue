<template>
  <textarea
    class="custom-textarea"
    :placeholder="placeholder"
    v-model="input"
    @keyup="$emit('update:value', input)"
    @focus="focus"
    @blur="blur"
    >

  </textarea>
</template>

<script>
  export default {
    name: 'TextArea',
    props: {
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: 'text'
        },
        focus: {
            type: Function,
            default: () => {}
        },
        blur: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            input: ''
        }
    }
  }
</script>
