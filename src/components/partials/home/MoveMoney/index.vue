<template>
  <div class="wrap mt-5 overflow-hidden">
    <animated-demo v-if="windowWidth < 1200" class="d-flex justify-content-center hdw-at-movemoney"/>
  <!-- please check sliced_container.scss for this sliced section class -->
  <SlicedSection class="default-sliced move_money-section">
    <template v-slot:slot-left>
      <header-text> Move Money in <br /> 3 Easy Endpoints </header-text>
      <ul class="card-list">
        <li v-for="(data, index) in card_data" :class="[{ 'active' : activeNav === index }]" :key="data.id">
          <a href="#"
            @click.prevent.stop="
              setNav(data)
              setTab(data)
            ">
            <Card
              :key="data.id"
              :fa_icon="data.fa_icon"
              :headerLabel="data.headerLabel"
              :text="data.text"
              iconSize="3x"
            />
          </a>
        </li>
      </ul>
    </template>

    <!-- right content -->
    <template v-slot:slot-right>
     <code-panel title="Step 1 - Create Users" v-show="isTabActive('create_users')">
        <pre v-highlightjs>
          <code class="bash">
            curl -X POST -H "Accept: application/vnd.hydropay.v1.hal+json" -H
            "Content-Type: application/json" -H "Authorization: Bearer
            LlcntSzAKFLC9rnhlTBflutTqSCOfZavWUizDQJVtkS5noVHt2" -d '{
                "firstName": “Nick”,
                "lastName": “Furry”,
                "email": “nick.f@shieldmail.com",
                "type": "receive-only"
            }' "https://api-sandbox.hydropay.com/customers" -v
          </code>
        </pre>
     </code-panel>
     <code-panel title="Step 2 - Attach Bank Accounts" v-show="isTabActive('attach_bank')">
        <pre v-highlightjs>
          <code class="bash">
            CREATE TABLE "topic" (
                "id" serial NOT NULL PRIMARY KEY,
                "forum_id" integer NOT NULL,
                "subject" varchar(255) NOT NULL
            );
            ALTER TABLE "topic"
            ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
            REFERENCES "forum" ("id");

            -- Initials
            insert into "topic" ("forum_id", "subject")
            values (2, 'D''artagnian');
          </code>
        </pre>
     </code-panel>
     <code-panel title="Step 3 - Move Money" v-show="isTabActive('move_money')">
        <pre v-highlightjs>
          <code class="bash">
            curl -X POST -H "Accept: application/vnd.hydropay.v1.hal+json" -H
            "Content-Type: application/json" -H "Authorization: Bearer
            LlcntSzAKFLC9rnhlTBflutTqSCOfZavWUizDQJVtkS5noVHt2" -d '{
                "firstName": “Nick”,
                "lastName": “Furry”,
                "email": “nick.f@shieldmail.com",
                "type": "receive-only"
            }' "https://api-sandbox.hydropay.com/customers" -v
          </code>
        </pre>
     </code-panel>
    </template>
  </SlicedSection>
  </div>
</template>

<script>
import HeaderText from '@components/common/HeaderText'
import SlicedSection from '@components/common/SlicedSection'
import AnimatedDemo from '../AnimatedDemo'
import CodePanel from '../CodePanel'
import Card from '@components/common/Card'



export default {
  name: "MoveMoney",
  data() {
    return {
      activeNav: 0,
      activeTab: 'create_users',
      card_data: [
        {
          id: 0,
          fa_icon: ['fas', 'address-card'],
          headerLabel: 'Step 1 – Create Users',
          desc: 'create_users',
          text:'Your user can connect and verify their identity all within your application, without having to go to a third-party site.'
        },
        {
          id: 1,
          fa_icon:['fas', 'money-check-alt'],
          headerLabel: 'Step 2 – Attach Bank Accounts',
          desc: 'attach_bank',
          text:'Dwolla offers multiple ways to quickly verify bank accounts to send funds.'
        },
        {
          id: 2,
          fa_icon:['fas', 'exchange-alt'],
          headerLabel: 'Step 3 – Move Money',
          desc: 'move_money',
          text:'Automate your payments and even send up to 5,000 payments with 1 API request.'
        }
      ]
    }
  },
  methods: {
    setNav(data) {
      this.activeNav = data.id
    },
    setTab(tab_desc) {
      this.activeTab = tab_desc.desc
    },
    isTabActive(tab_description) {
      return this.activeTab === tab_description
    },
  },
  computed: {
    windowWidth() {
      return this.$store.getters['app/GET_WINDOW_WIDTH']
    }
  },
  components: { SlicedSection, HeaderText, Card, CodePanel, AnimatedDemo }
};
</script>
