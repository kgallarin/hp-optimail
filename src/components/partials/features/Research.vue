<template>
  <SlicedSection class="research-section">
    <template v-slot:slot-left>
      <img :src="require('@svg/features/cube.svg')" alt="Hydropay research">
    </template>
    <template v-slot:slot-right>
      <header-text size="xmd" class="text-uppercase">
         {{ headerText }}
      </header-text>

      <p class="text-desc color-gray" v-for="text in textDesc" :key="text">
        {{ text }}
      </p>

      <div class="link-wrapper">
        <a href="#" class="color-gold report-link">
          <svg height="20" width="20" class="yellow-arrow">
              <use :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'" class="svg-icon"  />
          </svg>
          Read the report
        </a>
      </div>
    </template>
  </SlicedSection>
</template>

<script>
import SlicedSection from '@components/common/SlicedSection'
import HeaderText from '@components/common/HeaderText'
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
      }
    },
    components: {
      SlicedSection,
      HeaderText
    }
  }
</script>
