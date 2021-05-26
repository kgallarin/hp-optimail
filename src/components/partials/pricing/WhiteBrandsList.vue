<template>
    <div class="white-brands-wrapper">
        <ul>
            <white-brands-item v-for="brand in brands" :key="brand.id" :data="brand" />
        </ul>
    </div>
</template>
<script>
import WhiteBrandsItem from './WhiteBrandsItem'
export default {
    name: 'WhiteBrandsList',
    data() {
        return {
            brands: [
                { 
                    id: 0,
                    name:'amazon'
                },
                { 
                    id: 1,
                    name:'booking'
                },
                { 
                    id: 2,
                    name:'docusign'
                },
                { 
                    id: 3,
                    name:'instacart'
                },
                { 
                    id: 4,
                    name:'shopify'
                },
                { 
                    id: 5,
                    name:'peloton'
                },
                { 
                    id: 6,
                    name:'unicef'
                },
                { 
                    id: 7,
                    name:'asos'
                },
                { 
                    id: 8,
                    name:'intercom'
                },
                { 
                    id: 9,
                    name:'lya'
                },
                { 
                    id: 10,
                    name:'ticketmaster'
                },
                { 
                    id: 11,
                    name:'salesforce'
                },
                { 
                    id: 12,
                    name:'adidas'
                },
                { 
                    id: 13,
                    name:'deliveroo'
                },
                { 
                    id: 14,
                    name:'postmates'
                }
            ]
        }
    },
    components: {
        WhiteBrandsItem
    }
}
</script>