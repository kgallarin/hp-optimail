<template>
  <div class="hero-demo-wrapper">
    <div class="pcard is-on">
      <div class="pcard-header">
        <div class="pcard-header-inner">
          <div class="pcard-holder d-flex justify-content-between w-100 align-items-center">
            <div class="pcard-holder-name">Order Summary</div>
            <svg height="20" width="20" class="svg-icon">
              <use :xlink:href="require('@svg/sprites/common.svg') + '#close'"  />
            </svg>
          </div>
        </div>
      </div>

      <div class="pcard-body">
        <div class="pcard-desc">
          <div class="pcard-avatar">
            <img :src="require('@images/demo/iphone.png')" alt="iPhone">
                <div class="d-flex">
                  <div class="add-more">
                    <span>-</span>
                    <span class="ctr">1</span>
                    <span>+</span>
                  </div>
                  <div class="remove">
                    Remove
                  </div>
                </div>
          </div>
          <div class="product-details">
            <p class="ttl">
              iPhone 11 Pro Max 256GB Gold
            </p>
            <p class="subs">
              A transformative triple‑camera system that adds tons of capability without complexity.
            </p>

            <ul class="product-info-list">
              <li>
                <span>Color</span>
                <span>Gold</span>
              </li>
              <li>
                <span>Space</span>
                <span>256GB</span>
              </li>
              <li>
                <span>Price</span>
                <span>€ 999.99</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="pcard-form">
          <div class="bordered">
            <div class="pcard-form-field pcard-form-card-nr js-pcard-trigger">
              <svg height="14" width="20">
                <use :xlink:href="require('@svg/sprites/animated_demo.svg') + '#cc'" class="svg-icon" />
              </svg>
              <div class="field-content-wrapper">
                <img :src="require('@svg/animated_demo/visa.svg')" class="visa-logo" alt="Affiliate Builder visa">
                <span id="field-card-strings-1" class="field-content-strings"><span>4242 4242 4242 4242</span></span>
                <span id="field-card-1" class="field-content"></span>
                <span class="placeholder-content">Card number</span>
              </div>
            </div>
            <div class="pcard-form-row">
              <div class="pcard-form-field pcard-form-card-exp js-pcard-trigger">
                <svg height="15" width="20">
                  <use
                    :xlink:href="require('@svg/sprites/animated_demo.svg') + '#calendar'"
                    class="svg-icon"
                  />
                </svg>
                <div class="field-content-wrapper">
                  <span id="field-exp-strings-1" class="field-content-strings"><span>10/22</span></span>
                  <span id="field-exp-1" class="field-content"></span>
                  <span class="placeholder-content">MM/YY</span>
                </div>
              </div>
              <div class="pcard-form-field pcard-form-card-cvc js-pcard-trigger">
                <svg height="20" width="15" class="svg-icon">
                  <use
                    :xlink:href="require('@svg/sprites/animated_demo.svg') + '#lock'"
                  />
                </svg>
                <div class="field-content-wrapper">
                  <span id="field-cvc-strings-1" class="field-content-strings"><span>123</span></span>
                  <span id="field-cvc-1" class="field-content"></span>
                  <span class="placeholder-content">CVC</span>
                </div>
              </div>
            </div>
            <div class="pcard-form-thanks">
              <div class="success-badge">
                <svg class="checkmark" width="48" height="48">
                  <circle class="checkmark-circle" cx="24" cy="24" r="24" fill="none" />
                  <path class="checkmark-check" d="M17.2,23.6l4.4,4.5l9.2-9.2" fill="none" />
                </svg>
              </div>
              <div class="thanks-title">Thank you for your purchase!</div>
            </div>
          </div>
        </div>
      </div>

      <div class="pcard-footer">
        <div class="pcard-form-submit js-pcard-trigger">
          <div class="pcard-form-submit-box"></div>
          <div class="pcard-form-submit-text">Pay € 999.99</div>
          <svg class="progress-circle" width="40" height="40">
            <g fill="#fff">
              <path d="M20,28c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S24.4,28,20,28z M20,14c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S23.3,14,20,14z" opacity=".4" />
              <path d="M28,20h-2c0-3.3-2.7-6-6-6v-2C24.4,12,28,15.6,28,20z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "expose-loader?$!jquery"
import '@plugins/AnimatedDemo/landing.js'

  export default {
    name:'AnimatedDemo'
  }
</script>
