<template>
  <SlicedSection single-column class="tab-control-wrapper">
    <!-- tab controls -->
    <div class="tab-control">
        <ul class="tab-control-nav d-flex">
            <li
                :key="menu.id"
                v-for="(menu, index) in tabMenu"
                class="tab-control-nav-list"
                :class="[
                    {'link-item': true},
                    {'active': selectedNav == index}
                ]"
            >
                <a
                    href="#"
                    class="link-item"
                    @click.prevent="
                      setNav(menu.id)
                      setTab(menu.tab_name)
                    "
                > {{ menu.label }}</a>
            </li>
            <li class="tab-control-nav-list">
                <Button type="submit" class="custom-button-yellow" label="create account" />
            </li>
        </ul>
    </div>
  </SlicedSection>
</template>
<script>
import Button from '@components/common/FormElements/Button'
import SlicedSection from '@components/common/SlicedSection'

export default {
    name: 'TabControl',
    data() {
        return {
            selectedNav: 0,
            tabMenu: [
                { id:0, label: 'What’s Included', tab_name: 'included' },
                { id:1, label: 'Pricing Details', tab_name: 'receiptCard' },
                { id:2, label: 'FAQS', tab_name: 'qa' }
            ]
        }
    },
    methods: {
        setNav(id) {
            this.selectedNav = id
        },
        setTab(label) {
            this.$emit('onSetActiveTab', label)
        }
    },
    components: {
        Button,
        SlicedSection
    }
}
</script>
