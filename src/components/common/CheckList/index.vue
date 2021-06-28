<template>
    <ul :class="[{'check-list': true }, {'bulleted-list': bulletList}]">
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
      },
      bulletList: {
        type: Boolean,
        default: false
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
