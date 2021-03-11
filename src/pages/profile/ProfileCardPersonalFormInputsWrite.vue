<template>
  <div class="q-gutter-y-md column">
    <q-input
      outlined
      dense
      v-model="inputsProfileEdit.name"
      label="Nombre"
      lazy-rules
      :rules="nameRules"
    />

    <q-input
      outlined
      dense
      v-model="inputsProfileEdit.surname"
      label="Apellido"
      lazy-rules
      :rules="surnameRules"
    />

    <q-input
      outlined
      dense
      v-model="inputsProfileEdit.email"
      label="Correo"
      lazy-rules
      :rules="emailRules"
    />

    <q-input
      outlined
      dense
      v-model="inputsProfileEdit.cellphone"
      label="Teléfono"
      lazy-rules
      :rules="cellphoneRules"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { email, names, notEmpty, telephoneNumber } from 'src/helpers/rules';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { editButton, inputsProfileEdit } from './composables';

export default defineComponent({
  name: 'ProfileCardPersonalFormInputsWrite',
  setup() {
    const { useState } = createNamespacedHelpers('auth');
    const { userCurrent } = useState(['userCurrent']);

    return {
      inputsProfileEdit,
      editButton,
      userCurrent,
      nameRules: [
        notEmpty('Debe proporcionar un nombre.'),
        names('Ingrese un nombre válido')
      ],
      surnameRules: [
        notEmpty('Debe proporcionar un apellido.'),
        names('Ingrese un apellido válido')
      ],
      emailRules: [
        notEmpty('Debe proporcionar un correo'),
        email('Ingrese un correo válido')
      ],
      cellphoneRules: [
        notEmpty('Debe proporcionar un número de teléfono.'),
        telephoneNumber('Ingrese un número de teléfono válido')
      ]
    };
  }
});
</script>
