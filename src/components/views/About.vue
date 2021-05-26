<template>
  <div class="about-wrapper">
    <!-- hero section -->
    <about-hero />

    <!-- section 2 -->
    <mission />

    <!-- section 3 -->
    <diamond-section />

    <!-- section 3 -->
    <list-section />

    <!-- section 4 -->
    <team />

    <!-- section 5 -->
    <getting-started />
  </div>
</template>

<script>
import AboutHero from '@components/partials/about/AboutHero'
import Mission from '@components/partials/about/Mission'
import DiamondSection from '@components/partials/about/DiamondSection'
import ListSection from '@components/partials/about/ListSection'
import Team from '@components/partials/about/Team'
import GettingStarted from '@components/partials/home/GettingStarted'

  export default {
    name: 'About',
    components: {
      AboutHero,
      Mission,
      DiamondSection,
      ListSection,
      GettingStarted,
      Team
    }
  }
</script>

