<template>
  <q-form @submit="onSubmitLogin">
    <q-input
      filled
      v-model="inputsLogin.email"
      label="Correo"
      lazy-rules
      :rules="emailRules"
    />

    <q-input
      filled
      type="password"
      v-model="inputsLogin.password"
      label="Contraseña"
      lazy-rules
      :rules="passwordRules"
    />

    <div>
      <q-btn
        label="Ingresar"
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
import { email, maxLength, minLength, notEmpty } from '../../helpers/rules';
import { inputsLogin } from './composables';

export default defineComponent({
  name: 'PageAuthCardLoginForm',
  components: {},
  setup() {
    const { useActions } = createNamespacedHelpers('auth');
    const { loginAction } = useActions(['loginAction']);

    const onSubmitLogin = async () => {
      loginAction(inputsLogin);

      await vueRouter.push({ name: 'profile' });
    };

    return {
      inputsLogin,
      onSubmitLogin,
      emailRules: [
        notEmpty('Debe proporcionar un correo'),
        email('Ingrese un correo válido')
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
