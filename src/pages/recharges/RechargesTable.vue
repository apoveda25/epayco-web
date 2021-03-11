<template>
  <div class="q-pa-md">
    <q-table
      title="Historial de recargas"
      :data="dataTable"
      :columns="columnsTable"
      row-key="id"
      :pagination.sync="pagination"
      :loading="loading"
      @request="onRequest"
      binary-state-sort
    >
    </q-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { loading, onRequest, pagination } from './composables';
import { IColumnTable, IRechargeDataTable } from './interfaces/recharges';

export default defineComponent({
  name: 'RechargesTable',
  setup() {
    const auth = createNamespacedHelpers('auth');
    const user = createNamespacedHelpers('user');
    const wallet = createNamespacedHelpers('wallet');
    const authState = auth.useState(['userCurrent']);
    const { userCurrent } = user.useState(['userCurrent']);
    const { walletCurrent } = wallet.useState(['walletCurrent']);
    const { userCurrentFindAction } = user.useActions([
      'userCurrentFindAction'
    ]);
    const { walletRechargesFindAction } = wallet.useActions([
      'walletRechargesFindAction'
    ]);

    const columnsTable: IColumnTable[] = [
      {
        name: '_id',
        label: 'ID',
        field: '_id',
        required: true,
        align: 'center',
        sortable: true
      },
      {
        name: 'mount',
        label: 'Monto',
        field: 'mount',
        required: true,
        align: 'center',
        sortable: true
      },
      {
        name: 'createdAt',
        label: 'Creado',
        field: 'createdAt',
        required: true,
        align: 'center',
        sortable: true
      }
    ];

    const dataTable: IRechargeDataTable[] = [];

    onBeforeMount(async () => {
      loading.value = true;

      await userCurrentFindAction(authState.userCurrent.value._id);

      await walletRechargesFindAction(userCurrent.value.wallet._id);

      dataTable.splice(0, dataTable.length, ...walletCurrent.value.recharges);

      loading.value = false;
    });

    return {
      columnsTable,
      dataTable,
      loading,
      pagination,
      onRequest
    };
  }
});
</script>
