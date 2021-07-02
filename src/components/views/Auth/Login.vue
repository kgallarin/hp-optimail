<template>
    <div class="login-page">
        <div class="login-form-container">
            <p class="header-label">login</p>

            <ValidationObserver ref="loginForm">
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

                    <ValidationProvider name="password" rules="required" v-slot="{ errors, failed }">
                        <div
                            :class="[
                                { 'has-err': failed },
                                { 'custom-input': true },
                                { 'active': password  !== '' }
                            ]"
                        >
                            <label class="input-placeholder" for="password">Password</label>
                            <Input ref="password" name="password" :type="isVisible ? 'text' : 'password'" :value.sync="password" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)" />
                            <font-awesome-icon
                                @click="toggleVisibility"
                                :icon="isVisible ? ['fas','eye-slash'] : ['fas','eye']"
                                class="show-hide-toggle"
                                size="lg"
                            />
                        </div>
                        <span class="validation-err">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <div class="bottom-section">
                        <router-link :to="{name:'forgot'}" class="bottom-link gold-link">Forget password?</router-link>
                        <Button type="submit" class="custom-button-yellow" label="login" />
                        <div class="text-center">
                            <router-link :to="{ name: 'register' }" class="bottom-link text-center d-inline-block gold-link">Don't have an account?</router-link>
                        </div>
                    </div>

                </form>
            </ValidationObserver>
        </div>
        <!-- <p class="post-text">
            <span>Financial institutions play an important role in our network.</span> <br />
            Affi Builder, Inc. is an agent of Veridian Credit Union and all funds associated with your account in our network are held in one or more pooled accounts at Veridian Credit Union.
            These funds may not be eligible for share insurance by the National Credit Union Share Insurance Fund.
            Affi Builder, Inc. is the operator of a software platform that communicates user instructions for funds transfers to Veridian Credit Union.
        </p> -->

        <div class="post-text-footer d-flex justify-content-between">
            <div>
              <p>© {{ currentYear }} Equinox Media LLC</p>
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
                email: '',
                password: ''
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
                return this.$refs.loginForm.validate().then(res => {
                    return res;
                });

                // write endpoint
            }

        }
    }
</script>
