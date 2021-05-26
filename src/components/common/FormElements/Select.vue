<template>
    <select 
        :name="name"
        class="custom-input-field"
        v-model="selected"
        @change="$emit('update:value', selected)"
    >
        <option v-for="option in data" :value="option.name" :key="option.id">{{ option.name }}</option>
    </select>
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
        data: {
            type: Array,
            default: () => []
        },
        value: {
            type: String,
            default: 'text'
        }
    },
    data() {
        return {
            selected: ''
        }
    },

    created() {
        this.input = this.value
    }
}
</script>
