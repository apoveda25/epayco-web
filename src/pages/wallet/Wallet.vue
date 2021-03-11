<template>
  <q-page class="row items-center justify-evenly">
    <!-- content -->
    <q-card class="my-card" flat bordered>
      <h4 class="text-center">Billetera</h4>

      <q-card-section>
        <div class="text-h6">
          Saldo actual
          <q-badge color="primary">{{ `$${walletCurrent.balance}` }}</q-badge>
        </div>

        <WalletDialog />
      </q-card-section>

      <q-card-section>
        <q-btn
          label="Recargar"
          class="full-width"
          @click="promptButton = true"
          color="primary"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { promptButton } from './composables';
import WalletDialog from './WalletDialog';

export default defineComponent({
  name: 'PageWallet',
  components: { WalletDialog },
  setup() {
    const wallet = createNamespacedHelpers('wallet');
    const auth = createNamespacedHelpers('auth');
    const { walletCurrentFindAction } = wallet.useActions([
      'walletCurrentFindAction'
    ]);
    const { walletCurrent } = wallet.useState(['walletCurrent']);
    const { userCurrent } = auth.useState(['userCurrent']);

    onBeforeMount(async () => {
      await walletCurrentFindAction(userCurrent.value);
    });

    return { walletCurrent, promptButton };
  }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  // min-width: 350px
  max-width: 300px
</style>
