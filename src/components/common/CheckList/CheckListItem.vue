<template>
    <li class="check-list-item">
        <div class="check-list-item-icon">
            <font-awesome-icon :icon="data.icon" :size="iconSize" />
        </div>
        <div class="check-list-item-content">
            <p class="header">{{ data.title }}</p>
            <ul v-if="typeof data.check_list != undefined && data.check_list">
                <li v-for="(list, index) in data.check_list" :key="index">✓ {{ list }}</li>
            </ul>

            <p class="check-list-btext" v-else>
              {{ data.block_text }}
            </p>
        </div>
    </li>
</template>
<script>
export default {
    name:'CheckListItem',
    props: {
      data: {
          type: Object,
          default: () => {}
      }
    },
    computed: {
      iconSize() {
        return this.data.icon_size ? this.data.icon_size : '3x';
      }
    }
}
</script>
