<template>
  <div class="static-pages">
    
    <header-text class="text-center main-header-text">Privacy Policy</header-text>
    
    <p>Affi Builder (referred to as “we” or “our”), is fully compliant with General Data Protection and the e-Privacy Directive (2002/58/EC) and is committed to respect the privacy of our clients and website visitors. We are in continuous process innovating the ways we handle and protect customer data and privacy while aiming to deliver relevant data advertising and personalize online experience on behalf of our clients and affiliates</p>
    <p>This Privacy Policy provides details on how we use our client’s input data that are being collected during the registration process.</p>
    <p>By accessing and registering on our website and using our services, you become subject to this policy. Your acceptance with the  terms and conditions of this policy shall be effective once you are a verified user.</p>
    
    <header-text class="xmd">Information Collected Through the Affi Builder Services</header-text>
    <p>
      Personal data is any information relating to the business or natural person that is identified directly or indirectly during the registration process. It includes but is not limited to contact information, billing information, service information and third party information.
    </p>
    <p>
      Billing Information - when acquiring our services, you will be asked to provide first and last name, business name, city, state and zip code, phone number, credit card information or other banking payment information. These details will be required to verify your identity and establish your account and set up your services.
    </p>
    <p>
      Service Information - we may collect information that is created or provided by the user in line with the use of services provided. May include but not be limited to order information, chat logs, email logs and information about your activity logs while you’re using our website services.
    </p>
    <p>
      Third Party Information - we may collect details about you from other sources like LinkedIn, Facebook, Twitter and be added to your account details. This information may be used to enhance our AI’s capabilities in providing better services based on your needs.
    </p>
    
    <header-text class="xmd">Third Party Disclosures</header-text>
    <p>
      Affi Builder will not use or disclose your personal information without consent. Therefore, users are asked to agree to these Privacy Policy and Terms of Service. These data are necessary for Affi Builder to properly identify you as a user in our platform and provide you with personalized user experience.
    </p>
    <p>
      We do not sell, trade or rent your personal information to third parties. All personal information provided by you are handled in accordance with the legal requirements and interest solely for Affi Builder.
    </p> 
    
    <header-text class="xmd">Data Storage Period</header-text>
    <p>Affi Builder will store your personal data as long as it is necessary and required for the user experience functionality. In some cases, personal data may be stored for longer periods if the personal data is required to protect our client and third parties legitimate interests.</p>
    <p>We will store personal data as long as it's necessary for our services to properly cater your service needs. </p>
    
    <header-text class="xmd">Security</header-text>
    <p>Affi Builder maintains industry standard procedures to safeguard and protect data in our possession from breach of security, misuse and unauthorised access. Transmitting highly confidential information such as credit card details are well protected through encryption such as Secure Socket Layer (SSL) protocol.</p>
    <p>Please be aware that no method is 100% secure over the internet. However, we strive to protect all your personal information but cannot guarantee or warrant that your information will be guarded against unauthorised access.</p>
    
    <header-text class="xmd">Changes</header-text>
    <p>Affi Builder reserves the right to change and amend this Privacy Policy in order to adhere with the applicable laws and regulations. It is recommended that the user check this privacy policy from time to time to be fully aware about the changes and updates.</p>
  
    
    <company-details />
  </div>
</template>

<script>
import HeaderText from '@components/common/HeaderText'
import CompanyDetails from '@components/common/CompanyDetails'
export default {
  name: 'PrivacyPolicy',
  components: {
    HeaderText,
    CompanyDetails
  }
}
</script>