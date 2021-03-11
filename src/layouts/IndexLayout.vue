<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'IndexLayout'
});
</script>
