<template>
  <div class="slider-wrapper blog-slider">
    <swiper :options="swiperOption" ref="cmoSlider">
      <!-- slides -->
      <swiper-slide v-for="slide in slides" :key="slide.key" class="cursor-pointer">
        <div class="slider-inner d-flex" @click="blogLink(slide)">
          <!-- image container -->
            <div class="w-50 image-content">
              <img :src="require(`@images/slider/${slide.img}`)" alt="blog">
            </div>
          <!-- content starts -->
            <div class="w-50 main-content">
              <Tag text="category" color="green" />

              <header-text size="lg">{{ slide.header_desc }}</header-text>
              <p class="text-content">
                {{ slide.content }}
              </p>

              <p class="date">{{ slide.date }}</p>
            </div>
        </div>
      </swiper-slide>

    <div class="swiper-pagination pagination-custom"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Tag from '@components/common/Tag'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import HeaderText from '@components/common/HeaderText'

  export default {
    name: 'Slider',
    data() {
        return {
          swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              touchEventsTarget: 'wrapper',
              clickable:true
            },
            grabCursor: true,
            cssWidthAndHeight: true,
            slidesPerView: 1,
            spaceBetween: 30,
          },
          slides: [
            {
              id: 0,
              img:'blog1.jpg',
              header_desc: 'The Definition of Blog, Blogging, and Blogger',
              content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cu sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. fringilla vel, aliquet nec, vulputate eget, arcu.',
              date: '26 Nov 2019',
            },
            {
              id: 1,
              img:'blog1.jpg',
              header_desc: 'The Definition of Blog, Blogging, and Blogger',
              content: 'Sample 2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean massa.',
              date: '26 July 2019',
            },
            {
              id: 2,
              img:'blog1.jpg',
              header_desc: 'The Definition of Blog, Blogging, and Blogger',
              content: 'Sample 3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean massa.',
              date: '12 Dec 2019',
            },
            {
              id: 3,
              img:'blog1.jpg',
              header_desc: 'The Definition of Blog, Blogging, and Blogger',
              content: 'Sample 4 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean massa.',
              date: '18 Oct 2019',
            }
          ]
      }
    },
    methods: {
      blogLink(slide) {
          this.$store.commit('blog/SET_BLOG_DATA', slide)
          this.$router.push({ name: 'blog' })
      }
    },
    computed: {
      swiper() {
        return this.$refs.cmoSlider.swiper
      }
    },
    components: { swiper, swiperSlide, Tag, HeaderText }
  }
</script>
