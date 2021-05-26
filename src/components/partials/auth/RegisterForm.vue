<template>
    <div class="register-form-container" style="color:black; overflow: hidden;">
        <div class="links d-flex justify-content-center">
            <router-link :to="{ name:'login' }" class="d-inline">login</router-link>
            <a href="#" @click.prevent="" class="color-gold">sign up</a>
        </div>

        <ValidationObserver ref="loginForm">
          <form autocomplete="off" class="row-form" @submit.prevent="validate">

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

                <!-- Last name block -->
                <ValidationProvider name="lastname" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap col50">
                    <div
                        :class="[
                            { 'has-err': failed },
                            { 'active': lastname !== '' },
                            { 'custom-input': true }
                        ]"
                    >
                        <label class="input-placeholder" for="lastname">Last name</label>
                        <Input ref="lastname" name="lastname" type="text" :value.sync="lastname" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
                    </div>
                    <span class="validation-err">{{ errors[0] }}</span>
                </ValidationProvider>

                <!-- Business name block -->
                <ValidationProvider name="company" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap">
                    <div
                        :class="[
                            { 'has-err': failed },
                            { 'active': company !== '' },
                            { 'custom-input w-100': true }
                        ]"
                    >
                        <label class="input-placeholder" for="company">Business name</label>
                        <Input ref="company" name="company" type="text" :value.sync="company" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
                    </div>
                    <span class="validation-err">{{ errors[0] }}</span>
                </ValidationProvider>

                <!-- Job title block -->
                <ValidationProvider name="position" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap">
                    <div
                        :class="[
                            { 'has-err': failed },
                            { 'active': position !== '' },
                            { 'custom-input w-100': true }
                        ]"
                    >
                        <label class="input-placeholder" for="position">Job title</label>
                        <Input ref="position" name="position" type="text" :value.sync="position" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
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
                        <label class="input-placeholder" for="company">Email address</label>
                        <Input ref="email" name="email" type="text" :value.sync="email" :focus="(e) => handleFocus(e)" :blur="(e) => handleBlur(e)"/>
                    </div>
                    <span class="validation-err">{{ errors[0] }}</span>
                </ValidationProvider>

                <!-- Password block -->
                <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors, failed }" class="v-provider-wrap">
                    <div
                        :class="[
                            { 'has-err': failed },
                            { 'active': password !== '' },
                            { 'custom-input': true }
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


                <!-- Country block -->
                <ValidationProvider name="country" rules="required" v-slot="{ errors, failed }" class="v-provider-wrap">
                    <div
                        :class="[
                            { 'has-err': failed },
                            { 'active': country !== '' },
                            { 'custom-input': true }
                        ]"
                    >
                        <label class="input-placeholder" for="company">Country</label>
                        <Select :data="countries" :value.sync="country" />
                    </div>
                    <span class="validation-err">{{ errors[0] }}</span>
                </ValidationProvider>


                <!-- Styled Checkbox -->
                <b-form-checkbox
                    id="checkbox-1"
                    class="custom-checkbox"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                >
                    I agree to the <a href="#" class="link gold-link">HydroPay Terms of Service</a>.
                </b-form-checkbox>

                <Button type="submit" class="custom-button-yellow" label="register" />
            </form>

        </ValidationObserver>
    </div>
</template>
<script>
    import Input from '@components/common/FormElements/Input'
    import Select from '@components/common/FormElements/Select'
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
    name: 'RegisterForm',
    components: {
        Input,
        Select,
        Button,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            firstname:'',
            lastname:'',
            company:'',
            position:'',
            email:'',
            password:'',
            country:'',
            status:'',
            countries: [
                { id: 0, name: 'Thailand' },
                { id: 1, name: 'Spain' },
                { id: 2, name: 'Czech Republic' }
            ],
            isVisible: false
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
        }

    }
}
</script>
