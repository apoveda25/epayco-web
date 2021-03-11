<template>
  <q-form @submit="onSubmitRegister">
    <q-input
      filled
      v-model="inputsRegister.email"
      label="Correo"
      lazy-rules
      :rules="emailRules"
    />

    <q-input
      filled
      v-model="inputsRegister.name"
      label="Nombre"
      lazy-rules
      :rules="nameRules"
    />

    <q-input
      filled
      v-model="inputsRegister.surname"
      label="Apellido"
      lazy-rules
      :rules="surnameRules"
    />

    <q-input
      filled
      v-model="inputsRegister.document"
      label="Documento de identidad"
      lazy-rules
      :rules="documentRules"
    />

    <q-input
      filled
      v-model="inputsRegister.cellphone"
      label="Teléfono"
      lazy-rules
      :rules="cellphoneRules"
    />

    <q-input
      filled
      type="password"
      v-model="inputsRegister.password"
      label="Contraseña"
      lazy-rules
      :rules="passwordRules"
    />

    <div>
      <q-btn
        label="Registrarse"
        class="full-width"
        type="submit"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { vueRouter } from 'src/boot/router';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import {
  cardIdNumber,
  email,
  maxLength,
  minLength,
  names,
  notEmpty,
  telephoneNumber
} from '../../helpers/rules';
import { inputsRegister } from './composables';

export default defineComponent({
  name: 'PageAuthCardRegisterForm',
  components: {},
  setup() {
    const { useActions } = createNamespacedHelpers('auth');
    const { registerAction } = useActions(['registerAction']);

    const onSubmitRegister = async () => {
      registerAction(inputsRegister);

      await vueRouter.push({ name: 'home' });
    };

    return {
      inputsRegister,
      onSubmitRegister,
      emailRules: [
        notEmpty('Debe proporcionar un correo'),
        email('Ingrese un correo válido')
      ],
      nameRules: [
        notEmpty('Debe proporcionar un nombre.'),
        names('Ingrese un nombre válido')
      ],
      surnameRules: [
        notEmpty('Debe proporcionar un apellido.'),
        names('Ingrese un apellido válido')
      ],
      documentRules: [
        notEmpty('Debe proporcionar un documento de identidad.'),
        cardIdNumber('Ingrese un documento de identidad válido')
      ],
      cellphoneRules: [
        notEmpty('Debe proporcionar un número de teléfono.'),
        telephoneNumber('Ingrese un número de teléfono válido')
      ],
      passwordRules: [
        notEmpty('Debe proporcionar una contraseña'),
        minLength('La contraseña debe tener al menos 8 carácteres', 8),
        maxLength('La contraseña debe tener máximo 16 carácteres', 16)
      ]
    };
  }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
