<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://dcnt5qvi2hv76.cloudfront.net/b6634503/resize_cache/188080/f72cdc32ecc10461003d548dee4468d0/crm/button/60b21c318ca6a32d39303afe044e3a9a.png"
            />
          </q-avatar>
          ePayco
        </q-toolbar-title>

        <q-btn
          flat
          color="white"
          icon="logout"
          label="Salir"
          @click="onClick"
        />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab
          v-for="(value, key) in tabs"
          :key="key"
          :to="value.to"
          :label="value.label"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { vueRouter } from 'src/boot/router';

export default defineComponent({
  name: 'HomeLayout',
  setup() {
    const onClick = async () => {
      localStorage.removeItem('vuex');

      await vueRouter.push({ name: 'login' });
    };

    const tabs = [
      {
        to: { name: 'profile' },
        label: 'Perfil'
      },
      {
        to: { name: 'wallet' },
        label: 'Billetera'
      },
      {
        to: { name: 'recharges' },
        label: 'Recargas'
      },
      {
        to: { name: 'payments' },
        label: 'Pagos'
      }
    ];
    return { tabs, onClick };
  }
});
</script>
