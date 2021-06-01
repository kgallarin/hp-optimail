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
                    header: 'Compliance and Security', 
                    content: 'Aff Builder has comprehensive experience with KYC/CIP and AML procedure, compliance with all local and international laws, and licensed and regulated financial institution that diverges according to payment options and countries. We have a full regulatory understanding and compliance risk assessments - which means every transaction is highly secured and treated with confidentiality.',
                    icon:'baby-carriage'
                },
                { 
                    id: 1,
                    header: 'Simplicity', 
                    content: 'With a single integration to our advanced framework, businesses from all sorts of industries and eCommerce can make payments. Whether it is sending or receiving to almost any bank accounts, eWallets, mobile banking anywhere in the world in a fast, highly secure, and adaptable platform.',
                    icon:'hands-helping' 
                },
                { 
                    id: 2,
                    header: 'Multi- Currencies and Flexible Foreign Exchange', 
                    content: 'Aff Builder provides the most competitive foreign exchange rates either for single or mass payments and the flexibility for mixing and funding your FX needs, which allows you to store funds in major currencies while having an advantage payment network for minor currencies.',
                    icon:'business-time'  
                },
                { 
                    id: 3,
                    header: 'Worldwide Reach', 
                    content: 'Aff Builder, as one of the fastest-growing international payment service providers, we provide services for both business customers and consumers with real-time digital payments with our unique and integrated B2B B2C approach.',
                    icon:'procedures'   
                },
                { 
                    id: 4,
                    header: 'Customer Satisfaction Guaranteed', 
                    content: 'Satisfied customers are one of the critical components of business success. Providing payment solutions with complete transparency, guarantee what you send is what they receive with settlement timing will make your seasonal customer one of your patron user.',
                    icon:'cogs'    
                },
                { 
                    id: 5,
                    header: 'Single Integration', 
                    content: 'With easy integration to our advanced framework, businesses from all sorts of industries and eCommerce can make payments, whether it&#39;s sending or receiving to almost any bank accounts, eWallets, mobile banking anywhere in the world in a fast, highly secure and adaptable platform.',
                    icon:'chart-bar'     
                }
            ]
        }
    },
    components: {
        IconedListItem
    }
}
</script>