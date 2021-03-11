<template>
  <div class="q-gutter-y-md column">
    <q-input outlined dense :value="userCurrent.name" label="Nombre" readonly />

    <q-input
      outlined
      dense
      :value="userCurrent.surname"
      label="Apellido"
      readonly
    />

    <q-input
      outlined
      dense
      :value="userCurrent.email"
      label="Correo"
      readonly
    />

    <q-input
      outlined
      dense
      :value="userCurrent.cellphone"
      label="Teléfono"
      readonly
    />

    <q-input
      outlined
      dense
      :value="userCurrent.document"
      label="Documento de identidad"
      readonly
    />

    <q-input
      outlined
      dense
      :value="userCurrent.createdAt"
      label="Creado"
      readonly
    />

    <q-input
      outlined
      dense
      :value="userCurrent.updatedAt"
      label="Actualizado"
      readonly
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers';

export default defineComponent({
  name: 'ProfileCardPersonalFormInputsRead',
  setup() {
    const { useState } = createNamespacedHelpers('auth');
    const { userCurrent } = useState(['userCurrent']);

    return {
      userCurrent
    };
  }
});
</script>
