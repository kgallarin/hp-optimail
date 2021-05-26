<template>
    <li class="white-brands-item">
        <div class="white-brands-screen">
            <img :src="require(`@images/white-brands/${data.name}.svg`)" :alt="data.name">
        </div>
    </li>
</template>
<script>

export default {
    name: 'WhiteBrandsItem',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }

}
</script>
