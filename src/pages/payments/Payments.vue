<template>
  <q-page class="row items-center justify-evenly">
    <!-- content -->
    <PaymentsStepper />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PaymentsStepper from './PaymentsStepper.vue';

export default defineComponent({
  name: 'PagePayments',
  components: { PaymentsStepper }
});
</script>
