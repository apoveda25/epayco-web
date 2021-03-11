<template>
  <q-page class="row items-center justify-evenly">
    <!-- content -->
    <RechargesTable />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import RechargesTable from './RechargesTable.vue';

export default defineComponent({
  name: 'PageRecharges',
  components: { RechargesTable }
});
</script>
