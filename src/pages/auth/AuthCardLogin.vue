<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered>
        <h4 class="text-center">Iniciar Sesion</h4>

        <q-card-section>
          <AuthCardLoginForm />
        </q-card-section>

        <q-card-section>
          <q-btn :to="{ name: 'register' }" label="Registrarse" flat />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AuthCardLoginForm from './AuthCardLoginForm.vue';

export default defineComponent({
  name: 'PageAuthCardLogin',
  components: { AuthCardLoginForm },
  setup() {
    return {};
  }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 350px
  max-width: 400px
</style>
