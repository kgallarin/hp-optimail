<template>
    <li @click.prevent.stop="handleClick(data)" class="cs-brands-item">
        <div class="cs-brands-item-inner">
            <div class="cs-image-screen">
                <img :src="require(`@images/brands/${data.name}.png`)" :alt="`${data.desc} case study`">
            </div>

            <p class="cs-brands-item-header">
                {{ data.header_desc }}
            </p>
            <p class="cs-brands-item-desc">
                {{ data.content }}
            </p>

              <router-link :to="{ name: 'blog', params: { data } }" class="gold-link">
                <svg height="20" width="20" class="mr-1 yellow-arrow">
                  <use :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'" class="svg-icon" />
                </svg>
                Read this case
            </router-link>
        </div>
    </li>
</template>
<script>
export default {
    name: 'CaseStudyBrandsItem',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
      handleClick(data) {
        this.$store.commit('blog/SET_BLOG_DATA', data)
        this.$router.push({ name: 'blog' })
      }
    }
}
</script>
