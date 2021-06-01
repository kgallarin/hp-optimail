<template>
    <div class="register-page">
        <div class="white-wrapper position-relative">
            <div class="white-container d-flex">
                <div class="white-container-text">
                    <header-text class="color-lbue" size="sm">Start testing, create your sandbox account</header-text>

                    <p class="content">
                        Start building in the sandbox for free, right now. From creating customers to initiating transactions,
                        get a feel for how our API works before going live in production. <br /> <br />
                        Have you previously created a sandbox account?<br />
                        <router-link href="#" :to="{name: 'login'}" class="color-gold gold-link">Log in</router-link>.
                    </p>

                    <div class="help-links">
                        <p class="help-links-header">Helpful links</p>
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
                                    <use
                                        :xlink:href="require('@svg/sprites/dark_card.svg') + '#yellow-arrow'"
                                    />
                                </svg>
                                Getting started in the sandbox.
                              </a>
                            </li>
                        </ul>

                        <div class="help-links-footer d-flex justify-content-between">
                            <p>© {{ currentYear }} Aff Builder</p>
                            <router-link :to="{ name: 'text_page' }">Terms & Privacy</router-link>
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
