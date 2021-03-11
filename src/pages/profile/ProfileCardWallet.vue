<template>
  <q-page padding>
    <!-- content -->
    <q-card class="my-card" flat bordered>
      <h4 class="text-center">Datos personales</h4>

      <q-card-section>
        <!-- <AuthCardLoginForm /> -->
      </q-card-section>

      <q-card-section>
        <q-btn :to="{ name: 'register' }" label="Registrarse" flat />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  // name: 'PageName'
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  // min-width: 350px
  // max-width: 400px
</style>
