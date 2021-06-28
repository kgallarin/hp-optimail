<template>
    <div>
        <SlicedSection single-column class="brands" custom-class="blue-bg mask bordered-bottom">

            <Slider />

        </SlicedSection>


        <div class="brands-main-wrapper">
            <div class="brands-main">
                <header-text class="text-center">Brands Promoted with Aff Builder.</header-text>
                

                <ul class="brands-list">
                    <li v-for="image in images" :key="image.id">
                        <img :src="require(`@images/brands/${image.name}.png`)" :alt="image.desc">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import SlicedSection from '@components/common/SlicedSection'
import HeaderText from '@components/common/HeaderText'
import Slider from '../Slider'
export default {
    name:'LearnMore',
    data() {
        return {
            images: [
                { id:0, name:'goat', desc: 'Goat' },
                { id:1, name:'rally', desc: 'Rally' },
                { id:2, name:'kasasa', desc: 'Kasasa' },
                { id:4, name:'energy-funders', desc: 'Energy Funders' },
                { id:5, name:'bitmo', desc: 'Bitmo' },
                { id:6, name:'tillable', desc: 'Tillable' },
                { id:3, name:'aeropay', desc: 'Aeropay' },
                { id:7, name:'veryable', desc: 'Very Able' },
                { id:8, name:'astra', desc: 'Astra' },
                { id:9, name:'nomad', desc: 'Nomad' },
                { id:10, name:'gas-buddy', desc: 'Gas Buddy' },
                { id:11, name:'quick-load', desc: 'Quick Load' },
                { id:12, name:'double-good', desc: 'Double Good' },
                { id:13, name:'status', desc: 'Status' }
            ]
        }
    },
    components: { SlicedSection, Slider, HeaderText }
}
</script>
