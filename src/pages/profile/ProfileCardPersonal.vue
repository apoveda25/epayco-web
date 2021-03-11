<template>
  <q-card class="my-card" flat bordered>
    <h5 class="text-center">Datos personales</h5>

    <q-card-section>
      <ProfileCardPersonalForm />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ProfileCardPersonalForm from './ProfileCardPersonalForm';
export default defineComponent({
  name: 'ProfileCardPersonal',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: { ProfileCardPersonalForm }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 300px
  max-width: 400px
</style>
