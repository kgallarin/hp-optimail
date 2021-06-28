<template>
  <SlicedSection class="research-section">
    <template v-slot:slot-left>
      <img :src="require('@svg/features/cube.svg')" alt="Aff Builder research">
    </template>
    <template v-slot:slot-right>
      <header-text size="xmd" class="text-uppercase">
         {{ headerText }}
      </header-text>

      <p class="text-desc color-gray" v-for="text in textDesc" :key="text">
        {{ text }}
      </p>
      
      <check-list :bulletList="bulletList" :listData="listData" />
      
      <div class="link-wrapper">
        <a href="#" class="color-gold report-link">
          <svg height="20" width="20" class="yellow-arrow">
              <use :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'" class="svg-icon"  />
          </svg>
          Learn more
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
    name: 'Research',
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
      },
      bulletList: {
        type: Boolean,
        default: false
      }
    },
    components: {
      SlicedSection,
      HeaderText,
      CheckList
    }
  }
</script>
