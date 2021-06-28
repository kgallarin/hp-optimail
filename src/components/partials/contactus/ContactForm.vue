<template>
  <div class="contactus-form">
    <header-text class="text-uppercase" size="xlg">
      Connect with our team and learn more about our features
    </header-text>
    <ValidationObserver ref="contactForm">
      <form @submit.prevent="validate" ref="" class="main-form" autocomplete="off">
        <!-- First name -->
        <ValidationProvider name="firstname" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap col50">
            <div
                :class="[
                    { 'has-err': failed },,
                    { 'active': firstname !== '' },
                    { 'custom-input': true }
                ]"
            >
                <label class="input-placeholder" for="firstname">First name</label>
                <Input ref="firstname" name="firstname" type="text" :value.sync="firstname" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
            </div>
            <span class="validation-err">{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- Last name -->
        <ValidationProvider name="lastname" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap col50">
            <div
                :class="[
                    { 'has-err': failed },,
                    { 'active': lastname !== '' },
                    { 'custom-input': true }
                ]"
            >
                <label class="input-placeholder" for="lastname">Last name</label>
                <Input ref="lastname" name="firstname" type="text" :value.sync="lastname" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
            </div>
            <span class="validation-err">{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- Email address block -->
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors, failed }" class="v-provider-wrap">
            <div
                :class="[
                    { 'has-err': failed },
                    { 'active': email !== '' },
                    { 'custom-input w-100': true }
                ]"
            >
                <label class="input-placeholder" for="company">Work email</label>
                <Input ref="email" name="email" type="text" :value.sync="email" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
            </div>
            <span class="validation-err">{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- Company name -->

        <ValidationProvider name="company" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap col50">
            <div
                :class="[
                    { 'has-err': failed },,
                    { 'active': company !== '' },
                    { 'custom-input': true }
                ]"
            >
                <label class="input-placeholder" for="company">Company name or Company Website</label>
                <Input ref="company" name="company" type="text" :value.sync="company" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
            </div>
            <span class="validation-err">{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- Phone number -->
        <ValidationProvider name="phone" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap col50">
            <div
                :class="[
                    { 'has-err': failed },,
                    { 'active': phone !== '' },
                    { 'custom-input': true }
                ]"
            >
                <label class="input-placeholder" for="phone">Phone number</label>
                <Input ref="phone" name="firstname" type="number" :value.sync="phone" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
            </div>
            <span class="validation-err">{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- Country block -->
        <ValidationProvider name="country" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap">
            <div
                :class="[
                    { 'has-err': failed },
                    { 'active': country !== '' },
                    { 'custom-input': true }
                ]"
            >
                <label class="input-placeholder" for="company">
                  <strong>Country</strong>
                </label>
                <Select :data="countries" :value.sync="country" />
            </div>
            <span class="validation-err">{{ errors[0] }}</span>
        </ValidationProvider>

        <!-- Company name -->
        <ValidationProvider name="message" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap col50">
            <div
                :class="[
                    { 'has-err': failed },
                    { 'custom-input input-textarea': true }
                ]"
            >
                <label class="input-placeholder" for="message">Tell us about your marketing needs</label>
                <TextArea name="message" type="text" :value.sync="message" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
            </div>
            <span class="validation-err">{{ errors[0] }}</span>
        </ValidationProvider>


        <Button type="submit" class="custom-button-yellow mt-5" label="send" />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import HeaderText from '@components/common/HeaderText'

import Input from '@components/common/FormElements/Input'
import Select from '@components/common/FormElements/Select'
import Button from '@components/common/FormElements/Button'
import TextArea from '@components/common/FormElements/TextArea'

import { ValidationProvider, ValidationObserver, extend } from "vee-validate/dist/vee-validate.full"
import { required, email, min } from "vee-validate/dist/rules";

import { currentYear, activeOnFocus, inActiveOnBlur } from '@helpers'

extend("required", {
    message: (field, values) => `${field} field is required.`
});

extend("email", {
    message: (field, values) => 'Please enter a valid email address.'
});
extend("min", min);

  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        company:'',
        phone:'',
        country:'',
        message:'',
        countries: [
            { id: 0, name: 'Thailand' },
            { id: 1, name: 'Spain' },
            { id: 2, name: 'Czech Republic' }
        ]
      }
    },
    mounted() {

    },
    methods: {
      handleFocus(e) {
          activeOnFocus(e)
      },
      handleBlur(e) {
          inActiveOnBlur(e)
      },
      toggleVisibility() {
          this.isVisible = !this.isVisible
      },
      validate() {
          return this.$refs.contactForm.validate().then(res => {
              return res;
          });
      }
    },
    components: {
      HeaderText,
      Input,
      Select,
      Button,
      ValidationProvider,
      ValidationObserver,
      TextArea

    }
  }
</script>
