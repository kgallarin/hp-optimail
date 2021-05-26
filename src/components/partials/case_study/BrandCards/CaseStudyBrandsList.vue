<template>
    <transition-group
      name="flip-list"
      tag="ul"
      class="brands-card-list"
      v-bind:css="false"
    >
        <case-study-brands-item v-for="brand in filteredCard" :key="brand.id" :data="brand" />
    </transition-group>
</template>
<script>
import CaseStudyBrandsItem from './CaseStudyBrandsItem'
import Velocity from 'velocity-animate'
import _ from 'lodash'

export default {
    name: 'CaseStudyBrandsList',
    data() {
        return {
            filteredCard: [],
            filterKey: 'all',
            brands: [
                {
                    id:0,
                    name:'goat',
                    desc: 'Goat',
                    header_desc: 'Goat Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '26 January 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','metome']
                },
                {
                    id:1,
                    name:'rally',
                    desc: 'Rally',
                    header_desc: 'Rally Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '26 February 2019',
                    case_link:'https://www.youtube.com',
                    tags:['facilitate','recieve']
                },
                {
                    id:2,
                    name:'kasasa',
                    desc: 'Kasasa',
                    header_desc: 'Healthcare Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '26 March 2019',
                    case_link:'https://www.dwolla.com',
                    tags:['facilitate','metome', 'recieve']
                },
                {
                    id:4,
                    name:'energy-funders',
                    desc: 'Energy Funders',
                    header_desc: 'Healthcare Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '26 Apr 2019',
                    case_link:'https://www.github.com',
                    tags:['facilitate','metome']
                },
                {
                    id:5,
                    name:'bitmo',
                    desc: 'Bitmo',
                    header_desc: 'Healthcare Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '26 May 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','metome']
                },
                {
                    id:6,
                    name:'tillable',
                    desc: 'Tillable',
                    header_desc: 'Healthcare Jobs Marketplace Tillable',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '26 June 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','metome']
                },
                {
                    id:3,
                    name:'aeropay',
                    desc: 'Aeropay',
                    header_desc: 'Healthcare Jobs Aeropay Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '3 July 2019',
                    case_link:'https://www.google.com',
                    tags:['recieve','metome']
                },
                {
                    id:7,
                    name:'veryable',
                    desc: 'Very Able',
                    header_desc: 'Healthcare Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '8 Aug 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','recieve']
                },
                {
                    id:8,
                    name:'astra',
                    desc: 'Astra',
                    header_desc: 'Healthcare Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '5 Sep 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','recieve']
                },
                {
                    id:9,
                    name:'nomad',
                    desc: 'Nomad',
                    header_desc: 'Healthcare Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '11 Oct 2019',
                    case_link:'https://www.google.com' ,
                    tags:['facilitate','send','send&recieve']
                },
                {
                    id:10,
                    name:'gas-buddy',
                    desc: 'Gas Buddy',
                    header_desc: 'Gas Buddy Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '29 Nov 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','metome']
                },
                {
                    id:11,
                    name:'quick-load',
                    desc: 'Quick Load',
                    header_desc: 'Healthcare Jobs Marketplace Offering Same Day ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '26 Dec 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','metome']
                },
                {
                    id:12,
                    name:'double-good',
                    desc: 'Double Good',
                    header_desc: 'Double Good ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '14 Jan 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','metome','send&recieve']
                },
                {
                    id:13,
                    name:'status',
                    desc: 'Status',
                    header_desc: 'Status ACH Payments',
                    content:'Automate your payments and even send up to 5,000 payments with 1 API request.',
                    date: '15 Feb 2019',
                    case_link:'https://www.google.com',
                    tags:['facilitate','send']
                }
            ]
        }
    },
    components: {
        CaseStudyBrandsItem
    },
    methods: {
        handleFilterKey(key) {
            this.filterKey = key
        },
        filterData(key){
            let filteredCard = this.brands.filter(e => {
                return e.tags.indexOf(`${key}`.toLowerCase().replace(/\s/g,'')) !== -1;
            })
            filteredCard.length !== 0 ? this.filteredCard = filteredCard : this.filteredCard = this.brands
        },
        shuffle() {
            this.filteredCard = _.shuffle(this.filteredCard).sort((a,b) => { return a.id - b.id})
        }


    },
    mounted() {
        this.filteredCard = this.brands
    },
    created() {
        this.$EventBus.$on('setFilterCategory', this.handleFilterKey)
    },
    beforeDestroy() {
        this.$EventBus.$off('setFilterCategory', this.handleFilterKey)
    },
    watch: {
    filterKey(newVal,oldVal) {
        if(newVal !== oldVal) {
          this.filterData(newVal)
          this.shuffle()
        }
      }
    }
}
</script>
