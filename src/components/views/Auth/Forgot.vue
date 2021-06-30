<template>
    <div class="forgot-password">
        <div class="forgot-password-container">
            <p class="header-label">Forgot Password</p>
            <ValidationObserver ref="forgotPassword">
                <form @submit.prevent="validate" autocomplete="off">
                  <ValidationProvider name="email" rules="required|email|min:7" v-slot="{ errors, failed }">
                      <div
                          :class="[
                              { 'has-err': failed },
                              { 'custom-input': true },
                              { 'active': email  !== '' }
                          ]"
                      >
                          <label class="input-placeholder" for="email">Email</label>
                          <Input ref="email" name="email" type="text" :value.sync="email" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
                      </div>
                      <div v-for="(err, index) in errors" :key="index">
                          <span class="validation-err">{{ err }}</span>
                      </div>
                  </ValidationProvider>

                  <div class="bottom-section">
                      <Button type="submit" class="custom-button-yellow" label="submit" />
                  </div>

                </form>
            </ValidationObserver>
        </div>
        <!-- <p class="post-text">
            <span>Financial institutions play an important role in our network.</span> <br />
            Aff Builder, Inc. is an agent of Veridian Credit Union and all funds associated with your account in our network are held in one or more pooled accounts at Veridian Credit Union.
            These funds may not be eligible for share insurance by the National Credit Union Share Insurance Fund.
            Aff Builder, Inc. is the operator of a software platform that communicates user instructions for funds transfers to Veridian Credit Union.
        </p> -->

        <div class="post-text-footer d-flex justify-content-between">
            <div>
              <p>© {{ currentYear }} Moebius Development Inc.</p>
            </div>

            <router-link :to="{ name:'terms_condition' }">
              <p>Terms & Privacy</p>
            </router-link>
        </div>
    </div>
</template>
<script>
    import Input from '@components/common/FormElements/Input'
    import Button from '@components/common/FormElements/Button'

    import { ValidationProvider, ValidationObserver, extend } from "vee-validate/dist/vee-validate.full"
    import { required, email, min } from "vee-validate/dist/rules";

    extend("required", {
        message: (field, values) => `${field} field is required.`
    });

    extend("email", {
        message: (field, values) => 'Please enter a valid email address.'
    });
    extend("min", min);


    import { currentYear, activeOnFocus, inActiveOnBlur } from '@helpers'

    export default {
        name: 'Login',
        components: {
            Input, Button,
            ValidationProvider,
            ValidationObserver
        },
        data() {
            return {
                isVisible: false,
                email: ''
            }
        },
        computed: {
            windowWidth() {
                return this.$store.getters['app/GET_WINDOW_WIDTH']
            },
            currentYear() {
                return currentYear()
            }
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
                return this.$refs.forgotPassword.validate().then(res => {
                    return res;
                });

                // write endpoint
            }

        }
    }
</script>
