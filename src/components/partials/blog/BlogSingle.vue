<template>
   <div class="blog-single">
       <header>{{ this.data === null ? 'Header is empty' : data.header_desc }}</header>
        <p class="sub-header">{{ this.data === null ? 'Header is empty' : data.date }}</p>

        <!-- image area -->
        <div class="image-screen">
            <img :src="require('@images/blog/blog-header.jpg')" alt="Aff Builder blog header">
        </div>
        <SlicedSection single-column >
            <!-- content starts -->
            <div class="main-content">
                <p class="main-content-texts">
                {{ this.data === null ? '' : data.short_desc }}
                </p>
                <TextCanvas>

                  <!-- sample content 1 -->
                    <!-- <div class="mb-4 col-2-parent">
                        <aside class="aside-content">
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
                        </aside>
                        <div class="block-content">
                            <Hero>Lorem ipsum dolor sit amet</Hero>
                            <h1>Cum sociis natoque penatibus</h1>
                            <h2>nascetur ridiculus mus.</h2>
                            <h3>parturient montes, nascetur ridiculus mus.</h3>
                            <h4>ullamcorper ultricies nisi.</h4>
                            <h5>hendrerit id, lorem. Maecenas nec odio</h5>

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
                        </div>
                    </div> -->
                    

                    <paragraph>
                      Read on for more tips on keyword research to increase <strong>conversion affiliate traffic</strong>. Make your affiliate <strong>campaigns</strong> faster with tools that help you create and automate your campaigns. 
                    </paragraph>

                    <paragraph>
                      In today’s blog post, I will share with you how powerful the Aff Builder  affiliate marketing tool can be used by your business to understand the market, conversion rate, daily visitors, website traffic, page views and much more. 
                    </paragraph>

                    <paragraph>
                      Aff Builder is one of the best affiliate marketing tools and it is the <strong>best email marketing program</strong> for several reasons : It is customizable, sends messages, emails, reports and manages subscribers to increase the profitability of your business. 
                    </paragraph>

                    <paragraph>
                      <strong>Affiliate marketing</strong> is beneficial to all parties involved and generates sales, customer recommendations and new website visitors. Affiliate marketers have a priority to track traffic, which is a useful source for monitoring the monetary value of leads. 
                    </paragraph>

                    <paragraph>
                      If you want to run a successful affiliate program, you need to invest in a good affiliate marketing tool and not rely on free tools. While affiliate marketing tools are essential to get started, the ones I recommend at a later date will help you scale faster once you have reached a certain revenue level. There are many excellent affiliate <strong>marketing tools</strong> on the market that can be used to operate an affiliate program for any type of business, including blogs. 
                    </paragraph>

                    <paragraph>
                      We have collected some proven affiliate <strong>sales tips and tricks</strong> that you can use to increase your passive income, expand your audience, increase your efforts, build authority and improve your sales numbers. These tips will be useful for any partner, no matter what program or brand you work with. We regularly post affiliate sales tips on our blog page to help our affiliates increase their affiliate income. 
                    </paragraph>

                    <paragraph>
                      One of the best ways to open up new perspectives and increase revenue is to use lead generation and affiliate programs. Although direct affiliate links are not allowed, it is easy to share to any social media platforms to increase your affiliate sales. 
                    </paragraph>

                    <paragraph>
                      Managing your affiliate program within your regular activities can be a tedious task as you need to monitor its growth, analyze statistics and keep your income from dwindling. <strong>Aff Builder affiliate marketing tools</strong> give you a consolidated overview of how affiliates perform and how much you pay. Our tools are the biggest advantage that they track leads generated by affiliates, each using unique tracking links.
                    </paragraph>

                    <paragraph>
                      By working with sellers, a motivated affiliate is able to generate passive income from the comfort of his home without worrying about producing his own products and services. 
                    </paragraph>
                    
                    <paragraph>
                      With active lead generation you bring new perspectives to your website. This means that you do not have to rely on your current customers and can expand your reach further. Free traffic sources bring a good number of visitors to your site so that you can use them to build a huge following that <strong>leads to conversion</strong>.    
                    </paragraph>
                    
                    <paragraph>
                      Contact our support team to know more about our affiliate marketing services that will help you grow your business. 
                    </paragraph>
                </TextCanvas>

                <div class="social-media-wrapper">
                    <!-- social media please add more prop when sharing the blog through api -->
                    <!-- <social-media label="Share" /> -->
                </div>
            </div>
        </SlicedSection>
   </div>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import SocialMedia from '@components/common/Footer/Socials'
import { checkNull } from '@helpers'
// text-elements
import TextCanvas from '@components/common/Texts/TextCanvas'
import Hero from '@components/common/Texts/Hero'
import Paragraph from '@components/common/Texts/Paragraph'
import UnOrderedList from '@components/common/Texts/UnOrderedList'
import OrderedList from '@components/common/Texts/OrderedList'
import ListItem from '@components/common/Texts/ListItem'

export default {
    name:'BlogSingle',
    props: {
      data: {
        type: Object,
        default: ()=> {}
      }
    },
    methods: {
        isNull(obj) {
            checkNull(obj)
        }
    },
    components: {
        SlicedSection,
        TextCanvas,
        Hero,
        Paragraph,
        UnOrderedList,
        OrderedList,
        ListItem,
        SocialMedia
    }
}
</script>
