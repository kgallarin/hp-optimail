<template>
    <input 
        :name="name"
        class="custom-input-field"
        :type="type"
        v-model="input"
        @keyup="$emit('update:value', input)" 
        @focus="focus"
        @blur="blur"
    />
</template>
<script>
export default {
    name: 'Input',
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
    },

    created() {
        this.input = this.value
    }
}
</script>
