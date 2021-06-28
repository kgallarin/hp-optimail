<template>
    <div class="iconed-list-wrapper">
        <ul class="iconed-list">
            <template v-for="data in actions">
                <IconedListItem :data="data" :key="data.id"/>
            </template>
        </ul>
    </div>
</template>
<script>
import IconedListItem from './IconedListItem'
export default {
    name:'IconedList',
    data() {
        return {
            actions: [
                { 
                    id: 0,
                    header: 'Success Management', 
                    content: 'Aff Builder has comprehensive experience with marketing and advertising procedures that focus on traffic performance to lift your brands for a wider audience.',
                    icon:'calendar-check'
                },
                { 
                    id: 1,
                    header: 'Simplicity and Single Integration', 
                    content: 'With one single integration to our advanced framework, businesses from all sorts of industries and eCommerce can understand which type of audience works best for every brand and use that data to boost your customer engagement.',
                    icon:'hands-helping' 
                },
                { 
                    id: 2,
                    header: 'Worldwide Reach', 
                    content: 'AFF Builder is one of the fastest growing affiliate marketing platforms, you can automate and manually gain full control over your affiliate marketing worldwide and focus on your business growth anywhere in the world.',
                    icon:'globe-americas'  
                },
                { 
                    id: 3,
                    header: 'Customer Satisfaction Guaranteed', 
                    content: 'Satisfied customers are one of the critical components of any successful businesses. Providing marketing solutions with complete transparency, guaranteed that will grow your business and motivate your affiliates.',
                    icon:'smile'   
                },
            ]
        }
    },
    components: {
        IconedListItem
    }
}
</script>