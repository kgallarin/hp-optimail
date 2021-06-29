<template>
    <div class="register-page">
        <div class="white-wrapper position-relative">
            <div class="white-container d-flex">
                <div class="white-container-text">
                    <header-text class="color-lbue" size="sm">Register and see your business grow</header-text>

                    <p class="content">
                        Make your affiliate campaigns faster with tools that help you create and automate your campaigns. <br /> <br />
                        Contact our support team to know more about our affiliate marketing services that will help you grow your business.<br /><br />
                        Already have an account?
                        <router-link href="#" :to="{name: 'login'}" class="color-gold gold-link">Log in</router-link>
                    </p>

                    <div class="help-links">
                        <!-- <p class="help-links-header">Helpful links</p>
                        <ul>
                            <li>
                                <a href="#" @click.prevent="" class="gold-link">
                                  <svg height="20" width="20" class="mr-1 yellow-arrow">
                                      <use
                                          :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'"
                                      />
                                  </svg>
                                  Getting started in the sandbox.
                                </a>
                            </li>
                            <li>
                                <a href="#" @click.prevent="" class="gold-link">
                                  <svg height="20" width="20" class="mr-1 yellow-arrow">
                                      <use
                                          :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'"
                                      />
                                  </svg>
                                  Getting started in the sandbox.
                                </a>
                            </li>
                            <li>
                                <a href="#" @click.prevent="" class="gold-link">
                                  <svg height="20" width="20" class="mr-1 yellow-arrow">
                                      <use
                                          :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'"
                                      />
                                  </svg>
                                  Getting started in the sandbox.
                                </a>
                            </li>
                            <li>
                              <a href="#" @click.prevent="" class="gold-link">
                                <svg height="20" width="20" class="mr-1 yellow-arrow">
                                    <user
                                        :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'"
                                    />
                                </svg>
                                Getting started in the sandbox.
                              </a>
                            </li>
                        </ul> -->

                        <div class="help-links-footer d-flex justify-content-between">
                            <p>© {{ currentYear }} Moebius Development Inc.</p>
                            <router-link :to="{ name: 'privacy_policy' }">Terms & Privacy</router-link>
                        </div>
                    </div>
                </div>
                <div class="white-container-blank">
                    <!-- floating form here -->
                    <register-form />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import RegisterForm from '@components/partials/auth/RegisterForm'
    import HeaderText from '@components/common/HeaderText'
    import { currentYear } from '@helpers'

    export default {
        name: 'Register',
        components: {
            HeaderText,
            RegisterForm
        },
        computed: {
            currentYear() {
                return currentYear()
            }
        },
    }
</script>
