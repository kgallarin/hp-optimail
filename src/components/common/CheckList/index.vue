<template>
    <ul class="check-list">
        <check-list-item v-for="data in listData" :key="data.id" :data="data"/>
    </ul>
</template>
<script>
import CheckListItem from './CheckListItem'
export default {
    name:'CheckList',
    props: {
      listData: {
        type: Array,
        default: () => []
      }
    },
    data() {
        return {

        }
    },
    components: {
        CheckListItem
    }
}
</script>
