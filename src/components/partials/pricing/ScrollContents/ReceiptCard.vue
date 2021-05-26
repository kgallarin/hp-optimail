<template>
    <SlicedSection single-column >
      <div class="receipt-card-main">
          <!-- title move faster -->
          <div class="move-faster-section">
              <header-text size="xlg" class="text-center text-uppercase">
                  Move faster with an integrated suite
              </header-text>
              <p class="mf-sub-text">
                  Leading businesses across the country are saving time and money <br />
                  with HydroPay, receiving benefits like predictable pricing, support, <br />
                  security and a seamless integration. Ready to connect?
                  <a href="#" class="link">Let’s talk payments.</a>
              </p>
          </div>

          <!-- receipt card starts -->
          <div class="receipt-card-wrapper">
            <div class="receipt-card d-flex">
                <div class="lg-section">
                    <font-awesome-icon :icon="['fas','money-check-alt']" size="2x" class="color-lblue receipt-card-icon" />

                    <p class="receipt-card-header">Payment</p>
                    <p class="receipt-card-text">
                        A complete payments platform engineered for growth
                    </p>

                    <p class="receipt-card-header">
                        Credit and debit cards
                    </p>

                    <p class="receipt-card-text">
                        Integrated per-transaction pricing means no setup fees or monthly fees. <br />
                        The price is the same for all cards.
                    </p>


                    <img :src="require('@svg/card-brands.svg')" alt="card-brands" />
                    <div class="single-icons">
                        <svg height="15" width="38" class="brand-item">
                            <use
                            :xlink:href="require('@svg/sprites/common.svg') + '#apple-pay'"
                            />
                        </svg>
                        <img class="brand-item" :src="require('@svg/google-pay.svg')" alt="card-brands" />
                    </div>

                </div>
                <div class="sm-section d-flex align-items-center justify-content-center">
                    <charge-calc />
                </div>
            </div>
            <div class="receipt-card d-flex">
                <div class="lg-section">
                    <p class="receipt-card-header">International payments</p>
                    <p class="receipt-card-text">
                       Additional fees required for international cards and currency conversion.
                    </p>

                    <ul class="rccheck-list">
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
                    </ul>

                </div>
                <div class="sm-section d-flex flex-column align-items-center justify-content-center">
                    <div class="sm-content-wrap d-flex flex-column">
                        <span class="percentage">+1%</span>
                        <div class="desc">
                            for international cards If currency conversion is required, an additional 1% fee will apply.
                        </div>
                        <a href="#" class="link">Learn more</a>
                    </div>
                </div>
            </div>
          </div>


          <!-- Blue ribbon -->
          <blue-ribbon class="mt-4">
              <p>
                  <font-awesome-icon :icon="['fas','tag']" size="lg" class="color-lblue font-icon" />
                  Custom pricing available for companies with large payments volume or unique business models.
                  <a href="#" class="gold-link br-link">Contact Sales</a>
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
    }
}
</script>
