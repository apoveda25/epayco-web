<template>
  <q-dialog v-model="promptButton" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Recargar billetera</div>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-y-md column" @submit="onSubmit">
          <q-input
            outlined
            dense
            label="Document de identidad"
            @keyup.enter="promptButton = false"
            v-model="inputsRechargeWallet.document"
            lazy-rules
            :rules="documentRules"
          />
          <q-input
            outlined
            dense
            label="Teléfono"
            @keyup.enter="promptButton = false"
            v-model="inputsRechargeWallet.cellphone"
            lazy-rules
            :rules="cellphoneRules"
          />
          <q-input
            outlined
            dense
            label="Monto"
            @keyup.enter="promptButton = false"
            v-model="inputsRechargeWallet.mount"
            lazy-rules
            :rules="mountRules"
          />

          <q-card-actions align="center" class="text-primary">
            <q-btn color="primary" type="submit" label="Recargar" />
            <q-btn color="secondary" label="Cancelar" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api';
import { Notify } from 'quasar';
import {
  cardIdNumber,
  digits,
  greater,
  notEmpty,
  telephoneNumber
} from 'src/helpers/rules';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { inputsRechargeWallet, promptButton } from './composables';

export default defineComponent({
  name: 'WalletDialog',
  setup() {
    const wallet = createNamespacedHelpers('wallet');
    const auth = createNamespacedHelpers('auth');
    const recharge = createNamespacedHelpers('recharge');
    const { walletCurrentFindAction } = wallet.useActions([
      'walletCurrentFindAction'
    ]);
    const { rechargeCreateAction } = recharge.useActions([
      'rechargeCreateAction'
    ]);
    const { walletCurrent } = wallet.useState(['walletCurrent']);
    const { userCurrent } = auth.useState(['userCurrent']);

    onBeforeMount(async () => {
      await walletCurrentFindAction(userCurrent.value);

      inputsRechargeWallet.createdBy = userCurrent.value._id;
    });

    const onSubmit = async () => {
      inputsRechargeWallet.mount = parseFloat(inputsRechargeWallet.mount);

      await rechargeCreateAction(inputsRechargeWallet);

      promptButton.value = false;

      Notify.create({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: 'Su recarga ha sido exitosa.'
      });
    };

    return {
      walletCurrent,
      promptButton,
      inputsRechargeWallet,
      cellphoneRules: [
        notEmpty('Debe proporcionar un número de teléfono.'),
        telephoneNumber('Ingrese un número de teléfono válido')
      ],
      documentRules: [
        notEmpty('Debe proporcionar un documento de identidad.'),
        cardIdNumber('Ingrese un documento de identidad válido')
      ],
      mountRules: [
        notEmpty('Debe proporcionar un monto mayor a cero.'),
        digits('Ingrese un monto válido'),
        greater('Ingrese un monto mayor que cero.', 0)
      ],
      onSubmit
    };
  }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  // min-width: 350px
  max-width: 300px
</style>
