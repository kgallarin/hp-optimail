<template>
    <div v-show="!!notifState.message" class="aff-alert animate animated bounce-in">
        <b-alert
          :show="!!notifState.message"
          dismissible
          @dismissed="handleDismissed"
          :variant="notifState.level"
        >
            <span>
                {{ notifState.message }}
            </span>
        </b-alert>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'AlertNotif',
        data: () => ({
            closeAlert: 0,
        }),
        computed: {
            notifState() {
                return this.$store.getters['alert/GET_NOTIF']
            },
        },
        methods: {
            handleDismissed() {
                this.$store.commit('alert/RESET_NOTIFICATION')
            }
        },
        beforeDestroy() {
            this.handleDismissed()
        }
    }


</script>