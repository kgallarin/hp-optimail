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
              header_desc: 'Reach Your Ultimate Lead Conversion Goal',
              content:'Read on for more tips on keyword research to increase conversion affiliate traffic. Make your affiliate campaigns faster with tools that help you create and automate your campaigns. In today’s blog post, I will share with you how powerful the Aff Builder  affiliate marketing tool can be used by your business to understand the market, conversion rate, daily visitors, website traffic, page views and much more. ',
              date: '25 Feb 2021',
            },
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
