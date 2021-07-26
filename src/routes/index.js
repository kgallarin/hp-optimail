import Vue from 'vue';
import Router from 'vue-router';

// views
import Home from '@components/views/Home';
import Affiliate from '@components/views/Affiliate';
import TextPage from '@components/views/TextPage';
import Blog from '@components/views/Blog';
import CaseStudy from '@components/views/CaseStudy';
import About from '@components/views/About';
import Features from '@components/views/Features';
import ContactUs from '@components/views/ContactUs';
import PayoutTerms from '@components/views/PayoutTerms';
import Careers from '@components/views/Careers';

import Login from '@components/views/Auth/Login';
import Forgot from '@components/views/Auth/Forgot';
import Register from '@components/views/Auth/Register';
import ChangePassword from '@components/views/Auth/ChangePassword';
import PageNotFound from '@components/views/PageNotFound';

// payments views
import Payments from '@components/views/Payments';
import MassPayouts from '@components/views/MassPayouts';
import Subscription from '@components/views/Subscription';
import CurrencyConversions from '@components/views/CurrencyConversions';
import Integrations from '@components/views/Integrations';


import Gaming from '@components/views/Gaming';
import Ecommerce from '@components/views/Ecommerce';
import HighRisk from '@components/views/HighRisk';
import OnlineDating from '@components/views/OnlineDating';
import Startups from '@components/views/Startups';
import DigitalProducts from '@components/views/DigitalProducts';

// Static pages
import TermsCondition from '@components/views/TermsCondition';
import PrivacyPolicy from '@components/views/PrivacyPolicy';
import CookiePolicy from '@components/views/CookiePolicy';






Vue.use(Router);

const router = new Router({
  scrollBehavior() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 250)
    })
  },
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      props: true,
      meta: {
        layout: 'landing',
      },
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: {
        layout: 'auth',
      },
    },
    {
      path: '/register',
      component: Register,
      name: 'register',
      meta: {
        layout: 'auth',
      },
    },
    {
      path: '/forgot-password',
      component: Forgot,
      name: 'forgot',
      meta: {
        layout: 'auth',
      },
    },
    {
      path: '/change-password',
      component: ChangePassword,
      name: 'changePassword',
      meta: {
        layout: 'auth',
      },
    },
    {
      path: '/affiliates',
      component: Affiliate,
      name: 'affiliate',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/text',
      component: TextPage,
      name: 'text_page',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/blog',
      component: Blog,
      name: 'blog',
      props: true,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/case-study',
      component: CaseStudy,
      name: 'case_study',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/features',
      component: Features,
      name: 'features',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/about',
      component: About,
      name: 'about',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/contactus',
      component: ContactUs,
      name: 'contacts',
      meta: {
        layout: 'default',
      },
    },
    // new payment routes
    {
      path: '/payments',
      component: Payments,
      name: 'payments',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/mass-payouts',
      component: MassPayouts,
      name: 'mass_payouts',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/currency-conversions',
      component: CurrencyConversions,
      name: 'currency_conversions',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/subscription',
      component: Subscription,
      name: 'subscription',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/integration',
      component: Integrations,
      name: 'integration',
      meta: {
        layout: 'default',
      },
    },

    // new customer routes
    {
      path: '/digital-products',
      component: DigitalProducts,
      name: 'digital_products',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/gaming',
      component: Gaming,
      name: 'gaming',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/e-commerce',
      component: Ecommerce,
      name: 'ecommerce',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/high-risk',
      component: HighRisk,
      name: 'high_risk',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/online-dating',
      component: OnlineDating,
      name: 'online_dating',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/start-ups',
      component: Startups,
      name: 'start_ups',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/payout',
      component: PayoutTerms,
      name: 'payout',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/careers',
      component: Careers,
      name: 'careers',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/terms-and-conditions',
      component: TermsCondition,
      name: 'terms_condition',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/cookie-policy',
      component: CookiePolicy,
      name: 'cookie_policy',
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/privacy-policy',
      component: PrivacyPolicy,
      name: 'privacy_policy',
      meta: {
        layout: 'default',
      },
    },

    { path: "*", component: PageNotFound }
  ],
});

export default router;
