<template>
  <q-page class="row items-center justify-evenly">
    <!-- content -->
    <ProfileCardPersonal />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProfileCardPersonal from './ProfileCardPersonal';
export default defineComponent({
  name: 'PageProfile',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: { ProfileCardPersonal }
});
</script>
