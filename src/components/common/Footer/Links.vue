<template>
    <div class="footer-links-wrapper">
        <template v-for="data in data">
            <!-- mobile -->
              <div  v-if="windowWidth < 1200" class="footer-links" :key="data.id">
                  <h3 v-b-toggle="`collapse${data.id}`" class="cursor-pointer toggle-menu">
                  <p class="m-0">{{ data.title }}</p>
                  </h3>
                  <b-collapse :id="`collapse${data.id}`" accordion="my-accordion" role="tabpanel">
                      <div style="color:black">
                          <ul class="link-list">
                              <li v-for="link in data.links" :key="link.id">
                                  <a class="link-item" href="#" @click.prevent.stop="click(link)">{{ link.name }}</a>
                              </li>
                          </ul>
                      </div>
                  </b-collapse>
              </div>

            <!-- desktop -->
              <div v-else class="footer-links" :key="data.id">
                  <h3>{{ data.title }}</h3>
                  <ul class="link-list">
                      <li v-for="link in data.links" :key="link.id">
                          <a class="link-item text-capitalize" href="#" @click.prevent.stop="click(link)">{{ link.name }}</a>
                      </li>
                  </ul>
              </div>
        </template>
    </div>
</template>
<script>
export default {
    name: 'FooterLinks',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        click: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        windowWidth() {
            return this.$store.getters['app/GET_WINDOW_WIDTH']
        }
    }
}
</script>
