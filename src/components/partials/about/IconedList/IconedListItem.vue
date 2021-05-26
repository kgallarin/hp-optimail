<template>
        <li class="iconed-list-item">
            <div class="iconed-list-item-inner">
                <div class="iconed-icon-container">
                    <font-awesome-icon :icon="['fas',`${data.icon}`]" size="3x" class="color-lblue" />
                </div>
                <div class="iconed-content-container">
                    <p class="header-text">{{ data.header }}</p>

                    <p class="content">
                        {{ data.content }}
                    </p>
                </div>
            </div>
        </li>
</template>
<script>
export default {
    name:'IconedList',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>