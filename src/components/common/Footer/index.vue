<template>
    <footer>
        <SlicedSection single-column class="footer-main">
            <div class="links-wrapper">
                <!-- with logo box -->
                <div class="brand-wrapper">
                    <router-link :to="{name: 'home'}">
                      <img :src="require('@svg/hydropay-logo.svg')" alt="Hydropay" />
                    </router-link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                      <p v-if="windowWidth < 1200">© {{ currentYear }} HydroPay</p>
                </div>

                <!-- link list -->

                <!-- handle links via goTo() for external link or component name. One must be empty -->
                <!-- external link example -- http://www.google.com -->
                <!-- component link example please see /src/routes/index.js -- route_name -->
                <footer-links :data="links" :click="(e) => goTo(e)" />
            </div>
            <div class="signature">
                <p v-if="windowWidth > 1200">© {{ currentYear }} HydroPay</p>

                <!-- social media -->
                <social-media label="Follow Us" />
            </div>
        </SlicedSection>
    </footer>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import FooterLinks from './Links'
import SocialMedia from './Socials'
export default {
    name:'Footer',
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: 'product',
                    links: [
                        {
                            id: 1,
                            name: 'Platform',
                            external_link:'',
                            component_link:'Home'
                        },
                        {
                            id: 2,
                            name: 'Plans',
                            external_link:'http://www.google.com',
                            component_link:''
                        },
                        {
                            id: 3,
                            name: 'Security',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 4,
                            name: 'Partnerships',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 5,
                            name: 'Integragtions',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 6,
                            name: 'Industries',
                            external_link:'',
                            component_link:''
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'developers',
                    links: [
                        {
                            id: 1,
                            name: 'Sandbox',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 2,
                            name: 'Documentation',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 3,
                            name: 'API Updates',
                            external_link:'',
                            component_link:''
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'resources',
                    links: [
                        {
                            id: 1,
                            name: 'Resource Library',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 2,
                            name: 'Blog',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 3,
                            name: 'Case Studies',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 4,
                            name: 'Developers',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 5,
                            name: 'Help Center',
                            external_link:'',
                            component_link:''
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'company',
                    links: [
                        {
                            id: 1,
                            name: 'About Us',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 2,
                            name: 'Careers',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 3,
                            name: 'Press',
                            external_link:'',
                            component_link:''
                        },
                        {
                            id: 4,
                            name: 'Contact Us',
                            external_link:'',
                            component_link:'contacts'
                        },
                        {
                            id: 5,
                            name: 'Provide a Referral',
                            external_link:'',
                            component_link:''
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'legal',
                    links: [
                        {
                            id: 1,
                            name: 'Terms of Service',
                            external_link:'',
                            component_link:'text_page'
                        },
                        {
                            id: 2,
                            name: 'Privacy Policy',
                            external_link:'',
                            component_link:'text_page'
                        },
                        {
                            id: 3,
                            name: 'Cookies Policy',
                            external_link:'',
                            component_link:'text_page'
                        },
                        {
                            id: 4,
                            name: 'AML and KYC',
                            external_link:'',
                            component_link:'text_page'
                        },
                        {
                            id: 5,
                            name: 'Anti-Fraud',
                            external_link:'',
                            component_link:'text_page'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        goTo(link){
            if(link.external_link !== '') {
                window.open(link.external_link,'_blank')
            }else {
                if(this.$route.name !== link.component_link && link.component_link !== '') {
                    this.$router.push({ name: link.component_link })
                }
                return
            }
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
        windowWidth() {
            return this.$store.getters['app/GET_WINDOW_WIDTH']
        }
    },
    components: { SlicedSection, FooterLinks, SocialMedia }
}
</script>
