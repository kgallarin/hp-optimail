<template>
    <div class="sub-navigation fadeInDown animated delay-1s" @mouseleave="handleMouseOut">
        <div >
            <ul class="sub-navigation-inner">
            <li v-for="data in data.sub_links" :key="data.id">
                <a href="#"
                    @click.prevent="handleClick(data)">
                    <div class="d-flex">
                        <div class="sub-nav-icon">
                            <font-awesome-icon :icon="data.fa_icon" size="2x" />
                        </div>
                        <div class="sub-nav-desc">
                            <p class="sub-nav-title"> {{ data.title }} </p>
                            <p class="sub-nav-description"> {{ data.desc }} </p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SubNavigation',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
      handleMouseOut() {
          this.$emit('mouseLeft')
      },
      handleClick(link) {
          if(link.external_link !== '') {
                window.open(link.external_link,'_blank')
            }else {
                if(this.$route.name !== link.component_link && link.component_link !== '') {
                    this.$router.push({ name: link.component_link })
                }
            }
          this.handleMouseOut()

      }
    }
}
</script>
