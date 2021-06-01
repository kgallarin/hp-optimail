<template>
    <div class="change-password">
        <div class="change-password-container">
            <p class="header-label">Change Password</p>

            <ValidationObserver ref="forgotPassword">
                <form @submit.prevent="validate" autocomplete="off">
                    <ValidationProvider name="password" rules="required" v-slot="{ errors, failed }">
                        <div
                            :class="[
                                { 'has-err': failed },
                                { 'custom-input': true },
                                { 'active': password  !== '' }
                            ]"
                        >
                            <label class="input-placeholder" for="password">New password</label>
                            <Input  ref="password" name="password" :type="isVisibleNp ? 'text' : 'password'" :value.sync="password" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)" />
                            <font-awesome-icon
                                id="password"
                                @click="(e) => toggleVisibility('password')"
                                :icon="isVisibleNp ? ['fas','eye-slash'] : ['fas','eye']"
                                class="show-hide-toggle"
                                size="lg"
                            />
                        </div>
                        <span class="validation-err">{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider name="new_password" rules="required" v-slot="{ errors, failed }">
                        <div
                            :class="[
                                { 'has-err': failed },
                                { 'custom-input': true },
                                { 'active': new_password  !== '' }
                            ]"
                        >
                            <label class="input-placeholder" for="new_password">Repeat password</label>
                            <Input ref="new_password" name="password" :type="isVisibleRp ? 'text' : 'password'" :value.sync="new_password" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)" />
                            <font-awesome-icon
                                id="new_password"
                                @click="(e) => toggleVisibility('new_password')"
                                :icon="isVisibleRp ? ['fas','eye-slash'] : ['fas','eye']"
                                class="show-hide-toggle"
                                size="lg"
                            />
                        </div>
                        <span class="validation-err">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <div class="bottom-section">
                        <Button type="submit" class="custom-button-yellow" label="submit" />
                    </div>

                </form>
            </ValidationObserver>
        </div>
        <p class="post-text">
            <span>Financial institutions play an important role in our network.</span> <br />
            Aff Builder, Inc. is an agent of Veridian Credit Union and all funds associated with your account in our network are held in one or more pooled accounts at Veridian Credit Union.
            These funds may not be eligible for share insurance by the National Credit Union Share Insurance Fund.
            Aff Builder, Inc. is the operator of a software platform that communicates user instructions for funds transfers to Veridian Credit Union.
        </p>

        <div class="post-text-footer d-flex justify-content-between">
            <p>© {{ currentYear }} Aff Builder</p>

            <router-link :to="{ name:'text_page' }">
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
                password: '',
                new_password: '',
                isVisibleNp: false,
                isVisibleRp: false,
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
            toggleVisibility(e) {

              switch(e) {
                case 'password':
                  return this.isVisibleNp = !this.isVisibleNp
                    break
                case 'new_password':
                  return this.isVisibleRp = !this.isVisibleRp
                    break
                default:
                  return
              }
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
