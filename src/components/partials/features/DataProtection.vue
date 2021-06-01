<template>
  <SlicedSection class="data-protection">
    <template v-slot:slot-left>
      <header-text size="xmd" class="text-uppercase hd-rc">
        {{ headerText }}
      </header-text>

      <p class="text-desc color-gray" v-for="text in textDesc" :key="text">
        {{ text }}
      </p>

      <check-list :listData="listData" />
    </template>
    <template v-slot:slot-right>
      <div class="slot-right-inner">
        <img :src="require('@svg/features/servershield.svg')" alt="">

        <p class="text-desc color-lblue int">
          With Affiliate Builder, your business will have a fully integrated payment system at your fingertips.
        </p>

        <a href="#" class="color-gold report-link">
          <svg height="20" width="20" class="yellow-arrow ml-0 mr-1">
              <use :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'" class="svg-icon"  />
          </svg>
          Read the white paper
        </a>
      </div>
    </template>
  </SlicedSection>
</template>

<script>
import SlicedSection from '@components/common/SlicedSection'
import HeaderText from '@components/common/HeaderText'

import CheckList from '@components/common/CheckList'
  export default {
    name: 'DataProtection',
    props: {
      headerText: {
        type: String,
        default: ''
      },
      textDesc: {
        type: Array,
        default: () => []
      },
      listData: {
        type: Array,
        default: () => []
      }
    },
   data() {
        return {
          
        }
    },
    components: {
      SlicedSection,
      HeaderText,
      CheckList
    }
  }
</script>
