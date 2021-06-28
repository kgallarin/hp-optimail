<template>
    <SlicedSection single-column >
      <div class="receipt-card-main">
          <!-- title move faster -->
          <div class="move-faster-section">
              <header-text size="xlg" class="text-center text-uppercase">
                  {{ headerText }}
              </header-text>
              <p class="mf-sub-text">
                {{ subText }}
              </p>
          </div>

          <!-- receipt card starts -->
          <div v-if="hasCard" class="receipt-card-wrapper">
            <div class="receipt-card d-flex">
                <div class="lg-section">
                    <font-awesome-icon :icon="['fas','money-check-alt']" size="2x" class="color-lblue receipt-card-icon" />

                    <p class="receipt-card-header">Minimum Payouts</p>
                    <p class="receipt-card-text">
                        Once you reach the minimum payout of $100, you will be paid through your Wise account (formerly Tranferwise). 
                        We also have other different payout methods, you can choose to payout via PayPal, bank transfers, and Wire services. 
                        Affiliates can select the payout methods according to your needs. 
                    </p>
                    <p class="receipt-card-text">* All commissions are paid on USD</p>


                    <!-- <img :src="require('@svg/card-brands.svg')" alt="card-brands" />
                    <div class="single-icons">
                        <svg height="15" width="38" class="brand-item">
                            <use
                            :xlink:href="require('@svg/sprites/common.svg') + '#apple-pay'"
                            />
                        </svg>
                        <img class="brand-item" :src="require('@svg/google-pay.svg')" alt="card-brands" />
                    </div> -->

                </div>
                <div class="sm-section d-flex align-items-center justify-content-center">
                    <!-- <charge-calc /> -->
                </div>
            </div>
            <div class="receipt-card d-flex">
                <div class="lg-section">
                    <p class="receipt-card-header">
                        Payout Periods
                    </p>

                    <p class="receipt-card-text">
                      There are two payout periods each month and that is 15th and 30th. 
                      Every earnings payout made from 30th or 31st of previous month to 14th of the current month will be paid on the 15th while all earnings made from 15th to 29th or 30th will be paid on the last day of each month. 
                      Our team makes sure that all payouts are made on time without any delay.
                    </p>

                    <!-- <ul class="rccheck-list">
                        <li class="rccheck-list-item">
                            <font-awesome-icon :icon="['fas','check-circle']" size="lg" class="color-lblue" />
                            Embeddable checkout
                        </li>
                        <li class="rccheck-list-item">
                            <font-awesome-icon :icon="['fas','check-circle']" size="lg" class="color-lblue" />
                            Custom UI toolkit
                        </li>
                        <li class="rccheck-list-item">
                            <font-awesome-icon :icon="['fas','check-circle']" size="lg" class="color-lblue" />
                            Simplified PCI compliance
                        </li>
                        <li class="rccheck-list-item">
                            <font-awesome-icon :icon="['fas','check-circle']" size="lg" class="color-lblue" />
                            Invoice support
                        </li>
                    </ul> -->

                </div>
                <!-- <div class="sm-section d-flex flex-column align-items-center justify-content-center">
                    <div class="sm-content-wrap d-flex flex-column">
                        <span class="percentage">+1%</span>
                        <div class="desc">
                            for international cards If currency conversion is required, an additional 1% fee will apply.
                        </div>
                        <a href="#" class="link">Learn more</a>
                    </div>
                </div> -->
            </div>
          </div>


          <!-- Blue ribbon -->
          <blue-ribbon v-if="hasRibbon" class="mt-4 mb-4">
              <p>
                  <font-awesome-icon :icon="['fas','tag']" size="lg" class="color-lblue font-icon" />
                  Contact us for more detailed payout terms.
                  <router-link :to="{ name: 'contacts' }" class="gold-link br-link">Contact us</router-link>
              </p>
          </blue-ribbon>
      </div>
    </SlicedSection>
</template>
<script>
import ChargeCalc from '@components/partials/pricing/ChargeCalc'
import HeaderText from '@components/common/HeaderText'
import BlueRibbon from '@components/common/BlueRibbon'
import SlicedSection from '@components/common/SlicedSection'

export default {
    name: 'ReceiptCard',
    components: {
        ChargeCalc,
        HeaderText,
        BlueRibbon,
        SlicedSection
    },
    props: {
      hasCard: {
        type: Boolean,
        default: false
      },
      headerText: {
        type: String,
        default: '',
      },
      subText: {
        type: String,
        default: '',
      },
      hasRibbon: {
        type: Boolean,
        default: false
      }
    }
}
</script>
