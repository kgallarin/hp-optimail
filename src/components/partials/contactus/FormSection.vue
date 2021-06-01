<template>
  <SlicedSection class="form-section-wrapper">
    <template v-slot:slot-left>
      <contact-form />
    </template>
    <template v-slot:slot-right>
      <div class="cards-wrapper">
        <ul class="list-guide">
          <li>
            <Card
              informative
              :fa_icon="['fas', 'envelope-open-text']"
              headerLabel="Get Answers from the Aff Builder Team"
              iconSize="3x"
            >
              Find everything you need to know to make Aff Builder work for you.
              Contact our customer success team at <strong>support@affiliatebuilder.com</strong> or <strong>123-456-789</strong>.
            </Card>
          </li>
          <li>
            <Card
              informative
              :fa_icon="['fas', 'comments']"
              headerLabel="Be A Part of Our Developer-Focused Conversation"
              iconSize="3x"
            >
              Dwolla’s community forum is an ongoing dialogue specifically for developers.

              <a href="#" class="card-w-icon-link">Access our community forum</a>
            </Card>
          </li>
          <li>
            <Card
              informative
              :fa_icon="['fas', 'map-marked-alt']"
              headerLabel="Aff Builder"
              iconSize="3x"
            >
              909 Locust Street, Suite 201 <br />
              Des Moines, IA 50309
            </Card>
          </li>
        </ul>
      </div>
    </template>
  </SlicedSection>
</template>

<script>
import ContactForm from './ContactForm'
import SlicedSection from '@components/common/SlicedSection'
import Card from '@components/common/Card'
  export default {
    name: 'FormSection',
    components: {
      SlicedSection,
      ContactForm,
      Card
    }
  }
</script>
