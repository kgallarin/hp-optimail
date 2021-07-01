<template>
  <div class="static-pages">
    <header-text class="text-center main-header-text">
      Cookie Policy
    </header-text>
    <p>
      Affi Builder uses cookies to improve the user experience and to compile visitors' statistics, the type of technology they are using to help our developer identity if our site is working properly as it should for each technology like Mac or Windows, how long they spend on the site and what pages they look at etc.
    </p>
    
    <p>
      These details help us to continuously improve our website and services. So when you visit our website again, the cookie allows us to recognize your browser or device. You can change your cookie settings in your browser, if you don’t want cookies to be sent to your device. Please note that some website features or services of our Website may not function properly without cookies.
    </p>
    
    <p>We use the following types of cookies on our Website. Cookies are widely used for </p>
    
    <p>Technical cookies: these cookies are essential for the operation of our website. They enable the users to browse and use our features.</p>
    <p>Analytical and statistical cookies: we use these cookies to track visitor statistics. Using these statistics to continuously improve the website and mailings, and thus offer the user relevant content. These cookies also allow us to recognize and count the number of visitors and to see how visitors navigate when they’re using our Website. This helps us to improve user navigation and ensure users can find what they need more easily.</p>
    <p>Tracking cookies: these cookies monitor clicking behaviour and surfing habits. By means of these cookies we can see whether and when you view your profile, and whether you click through to our Website.</p>

    <header-text class="xmd mt-4">Turning Off Cookies</header-text>
    
    <p>Users can switch off cookies through their browser settings to stop it from accepting cookies. By doing so will likely limit the functionality of our website services. </p>
    <p>Affi Builder uses cookies to personalize content and to analyze traffic. We also share the user’s activity on our website to our social media, advertising and analytics partners. User’s consent to our cookies if you continue to use our website.</p>
    
    <p>The law allows us to store cookies on your device strictly for necessary operation on our site and for all other types of cookies that we asked permission to use.</p>
    <p>This site uses different types of cookies and some are placed by third party services that appear on our web pages.</p>
    <p>All our users can withdraw their consent anytime on our website.</p>
    
    <company-details />
  </div>
</template>

<script>
import HeaderText from '@components/common/HeaderText'
import CompanyDetails from '@components/common/CompanyDetails'
export default {
  name: 'CookiePolicy',
  components: {
    HeaderText,
    CompanyDetails
  }
}
</script>