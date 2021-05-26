<template>
    <div class="blog-wrapper">
        <blog-single :data="data" />
    </div>
</template>
<script>
import BlogSingle from '@components/partials/blog/BlogSingle'
export default {
    name: 'Blog',
    data() {
      return {
        blogData: {}
      }
    },
    components: {
        BlogSingle,
    },
    computed: {
      data() {
        return this.$store.getters['blog/GET_BLOG_DATA']
      }
    }
}
</script>
