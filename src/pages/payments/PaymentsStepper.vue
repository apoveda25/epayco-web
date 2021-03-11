<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="Pagar" icon="settings" :done="step > 1">
        <q-form @submit="onSubmitPayment" class="q-gutter-md">
          <q-input
            outlined
            dense
            v-model="inputsPayment.mount"
            label="Monto"
            lazy-rules
            :rules="mountRules"
          />
          <div>
            <q-btn label="Pagar" type="submit" color="primary" />
          </div>
        </q-form>
      </q-step>

      <q-step
        :name="2"
        title="Confirmar pago"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-form @submit="onSubmitConfirm" class="q-gutter-md">
          <q-input
            outlined
            dense
            v-model="inputsPaymentConfirm.code"
            label="Código de confirmación"
            lazy-rules
            :rules="codeRules"
          />
          <div>
            <q-btn label="Confirmar" type="submit" color="primary" />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Regresar"
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-step>
    </q-stepper>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api';
import { Notify } from 'quasar';
import {
  digits,
  greater,
  maxLength,
  minLength,
  notEmpty
} from 'src/helpers/rules';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { inputsPayment, inputsPaymentConfirm, step } from './composables';

export default defineComponent({
  name: 'PaymentsStepper',
  setup() {
    const auth = createNamespacedHelpers('auth');
    const user = createNamespacedHelpers('user');
    const payment = createNamespacedHelpers('payment');
    const authState = auth.useState(['userCurrent']);
    const { userCurrent } = user.useState(['userCurrent']);
    const { paymentCurrent } = payment.useState(['paymentCurrent']);
    const { userCurrentFindAction } = user.useActions([
      'userCurrentFindAction'
    ]);
    const { paymentCreateAction, paymentConfirmAction } = payment.useActions([
      'paymentCreateAction',
      'paymentConfirmAction'
    ]);

    onBeforeMount(async () => {
      await userCurrentFindAction(authState.userCurrent.value._id);

      inputsPayment.sesionId = userCurrent.value._id;
      inputsPayment.createdBy = userCurrent.value._id;
      inputsPayment.wallet = userCurrent.value.wallet._id;

      inputsPaymentConfirm.sesionId = userCurrent.value._id;
      inputsPaymentConfirm.updatedBy = userCurrent.value._id;
    });

    const onSubmitPayment = async () => {
      inputsPayment.mount = parseFloat(inputsPayment.mount);

      await paymentCreateAction(inputsPayment);

      inputsPaymentConfirm._id = paymentCurrent.value._id;

      step.value++;
    };

    const onSubmitConfirm = async () => {
      const status = await paymentConfirmAction(inputsPaymentConfirm);

      if (status)
        Notify.create({
          color: 'positive',
          textColor: 'white',
          icon: 'done',
          message: 'Su pago a sido confirmado.'
        });
    };

    return {
      step,
      inputsPayment,
      inputsPaymentConfirm,
      mountRules: [
        notEmpty('Debe proporcionar un monto mayor a cero.'),
        digits('Ingrese un monto válido'),
        greater('Ingrese un monto mayor que cero.', 0)
      ],
      codeRules: [
        notEmpty('Debe proporcionar un monto mayor a cero.'),
        minLength('Código inválido.', 6),
        maxLength('Código inválido.', 6),
        digits('Ingrese un código válido')
      ],
      onSubmitPayment,
      onSubmitConfirm
    };
  }
});
</script>
