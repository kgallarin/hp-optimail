<template>
    <footer>
        <SlicedSection single-column class="footer-main">
            <div class="links-wrapper">
                <!-- with logo box -->
                <div class="brand-wrapper">
                    <router-link :to="{name: 'home'}">
                      <b-img height="35px" width="187px" :src="require('@images/affiliate/aff_logo.png')" alt="Affi Builder"></b-img>
                    </router-link>
                    <p class="text-capitalize">
                        Affiliation, Evolved.
                    </p>
                    <p class="mt-0">© {{ currentYear }} Equinox Media LLC </p>
                </div>

                <!-- link list -->

                <!-- handle links via goTo() for external link or component name. One must be empty -->
                <!-- external link example -- http://www.google.com -->
                <!-- component link example please see /src/routes/index.js -- route_name -->
                <footer-links :data="links" :click="(e) => goTo(e)" />
            </div>
            <!-- <div class="signature"> -->
                

                <!-- social media -->
                <!-- <social-media label="Follow Us" /> -->
            <!-- </div> -->
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
                  title: 'Terms & conditions',
                  links: [
                      {
                          id: 1,
                          name: 'Terms of service',
                          external_link:'',
                          component_link:'terms_condition'
                      },
                      {
                          id: 2,
                          name: 'Cookie policy',
                          external_link:'',
                          component_link:'cookie_policy'
                      },
                      {
                          id: 3,
                          name: 'Privacy policy',
                          external_link:'',
                          component_link:'privacy_policy'
                      },
                  ]
                },
                {
                  id: 2,
                  title: 'our company',
                  links: [
                      {
                          id: 1,
                          name: 'homepage',
                          external_link:'',
                          component_link:'home'
                      },
                      {
                          id: 2,
                          name: 'about us',
                          external_link:'',
                          component_link:'about'
                      },
                      // {
                      //     id: 3,
                      //     name: 'Security',
                      //     external_link:'',
                      //     component_link:''
                      // },
                      {
                          id: 4,
                          name: 'contact',
                          external_link:'',
                          component_link:'contacts'
                      },
                  ]
                },
                {
                  id: 3,
                  title: 'services',
                  links: [
                      {
                          id: 1,
                          name: 'features',
                          external_link:'',
                          component_link:'features'
                      },
                      {
                          id: 2,
                          name: 'affiliates',
                          external_link:'',
                          component_link:'affiliate'
                      }
                  ]
                },
                {
                  id: 4,
                  title: 'resources',
                  links: [
                      // {
                      //     id: 1,
                      //     name: 'blogs',
                      //     external_link:'',
                      //     component_link:''
                      // },
                      {
                          id: 2,
                          name: 'Careers',
                          external_link:'',
                          component_link:'careers'
                      },
                  ]
                },
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
