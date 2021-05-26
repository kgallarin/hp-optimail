<template>
  <div class="text-page-wrapper">
    <TextCanvas>
      <!-- optional header -->
      <header class="title">Text is here</header>

      <Hero>Hero</Hero>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>

      <paragraph> 
        Paragraph
      </paragraph> 

      <un-ordered-list>
        <listItem>Paragraph</listItem>
        <listItem>Paragraph</listItem>
        <listItem>Paragraph</listItem>
      </un-ordered-list>

      <ordered-list>
        <listItem>Paragraph</listItem>
        <listItem>Paragraph</listItem>
        <listItem>Paragraph</listItem>
      </ordered-list>
    </TextCanvas>
  </div>
</template>

<script>
import TextCanvas from '@components/common/Texts/TextCanvas'
import Hero from '@components/common/Texts/Hero'
import Paragraph from '@components/common/Texts/Paragraph'
import UnOrderedList from '@components/common/Texts/UnOrderedList'
import OrderedList from '@components/common/Texts/OrderedList'
import ListItem from '@components/common/Texts/ListItem'

export default {
  name: "Home",
  props: {},
  components: { TextCanvas, Hero, Paragraph, UnOrderedList, OrderedList, ListItem }
};
</script>
