<template>
   <div class="blog-single">
       <header>{{ this.data === null ? 'Header is empty' : data.header_desc }}</header>
        <p class="sub-header">{{ this.data === null ? 'Header is empty' : data.date }} – Blog category</p>

        <!-- image area -->
        <div class="image-screen">
            <img :src="require('@images/blog/blog-header.jpg')" alt="Affiliate Builder blog header">
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

                    <Hero>{{ this.data === null ? '' : data.content }}</Hero>

                    <paragraph>
                      Recently, the US Federal government banned online casinos from operating in America by making it illegal to
                      transfer money to them through any US bank or payment system. As a result of this law, most of the popular
                      online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino
                      players found themselves being chased by the Federal government. But, after a fortnight, the online casino
                      industry came up with a solution and new online casinos started taking root. These began to operate under a
                      different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part
                      of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me.
                      Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
                    </paragraph>

                    <h1>The Payment Systems You Can Use:</h1>

                    <h5>1, 2) MasterCard and Visa:</h5>

                    <paragraph>
                      The most popular credit cards in the world, you can use these for depositing money into your casino account.
                      But, please note that the casinos do not deposit your winning through your credit card. They use one of the other electronic payment systems.
                      This is also the biggest reason why you should refrain from using your personal credit cards today for gambling.
                    </paragraph>

                    <h5>3, 4) Visa Delta, Visa Electron:</h5>


                    <paragraph>
                      These are debit cards that one can use to deposit cash into their casino account.
                      By debit card, it means that the money you pay through the card, is immediately withdrawn from your bank account.
                      This is a comfortable option, but here too, you cannot receive money into it.
                    </paragraph>

                    <h5>5) Neteller:</h5>


                    <paragraph>
                      Based in the UK and traded on the London AIM Stock Exchange, this e-bank company is one of the major independent
                      electronic banking entities in the world, and it allows players to transfer money to and from an online casino.
                    </paragraph>

                    <h5>6) Neteller Instacash</h5>

                    <paragraph>
                      This is Neteller’s version of the Debit Card, and, in fact, it is just like any other debit card with one difference.
                      To use, InstaCash, you have to pay a small amount. But, most casinos will offer to pay this for you, so read their regulations.
                    </paragraph>

                    <h5>7) EcoCard</h5>

                    <paragraph>
                      Based in the European Union, EcoCard offers a wider range of electronic banking solutions than the other e-banks.
                      Other than the regular card and debit system, you can decide beforehand how to create a flexible financial account.
                      Because they use a wide network of banks in Europe, transactions made through EcoCard are quick and efficient.
                    </paragraph>



                    <h5>8) FirePay</h5>

                    <paragraph>
                      This e-banking system is solely web-based and carries out its transactions just like a debit card.
                      You place cash into your FirePay account, and then, you can use that money to pay or deposit into your casino account.
                      While it will not cost you a dime to open an account, you will be charged a minimal amount each time you transfer money
                      from your bank account to FirePay.
                    </paragraph>


                    <h5>9) Moneybookers</h5>

                    <paragraph>
                      All you need to open an account is an email address! This e-banking system uses transactions from your credit
                      or debit card or your bank account to whichever company you wish to move your money to. Regulated in the UK and run by
                      Gatcombe Park Ventures Limited, this is one of the relatively new e-finance companies that allow transferring money to online casinos.
                    </paragraph>

                    <h5>10) eWalletXpress:</h5>

                    <paragraph>
                      Owned and run by Navaho Networks Inc, eWalletXpress is a new electronic payment system that
                      has been created to answer the need for US players to transfer funds to online casinos. This is a completely
                      different e-banking system. Instead of charging your bank account or your credit card, 900Pay charges your
                      telephone bill for all your financial transactions. This is one of the fastest methods of electronic
                      payment because you do not have to go through a long and detailed sign up process.
                      And, if you were wondering, this does work to fund your casino account.
                    </paragraph>
                </TextCanvas>

                <div class="social-media-wrapper">
                    <!-- social media please add more prop when sharing the blog through api -->
                    <social-media label="Share" />
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
