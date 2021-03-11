<template>
  <q-form class="q-gutter-y-md column" @submit="onSubmit">
    <ProfileCardPersonalFormInputsRead v-show="editButton" />
    <ProfileCardPersonalFormInputsWrite v-show="!editButton" />

    <div>
      <q-btn
        @click="onEditForm"
        v-show="editButton"
        round
        color="positive"
        icon="edit"
      />
      <q-btn
        @click="offEditForm"
        v-show="!editButton"
        round
        color="negative"
        icon="edit_off"
      />
    </div>

    <div>
      <q-btn
        label="Actualizar"
        class="full-width"
        type="submit"
        color="primary"
        :disable="editButton"
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Notify } from 'quasar';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { editButton, inputsProfileEdit } from './composables';
import ProfileCardPersonalFormInputsRead from './ProfileCardPersonalFormInputsRead';
import ProfileCardPersonalFormInputsWrite from './ProfileCardPersonalFormInputsWrite';

export default defineComponent({
  name: 'ProfileCardPersonalForm',
  components: {
    ProfileCardPersonalFormInputsRead,
    ProfileCardPersonalFormInputsWrite
  },
  setup() {
    const { useActions, useState } = createNamespacedHelpers('auth');
    const { userCurrentUpdateAction } = useActions(['userCurrentUpdateAction']);
    const { userCurrent } = useState(['userCurrent']);

    const onEditForm = () => {
      editButton.value = false;
      inputsProfileEdit._id = userCurrent.value._id;
      inputsProfileEdit.name = userCurrent.value.name;
      inputsProfileEdit.surname = userCurrent.value.surname;
      inputsProfileEdit.email = userCurrent.value.email;
      inputsProfileEdit.cellphone = userCurrent.value.cellphone;
      inputsProfileEdit.updatedBy = userCurrent.value._id;
    };

    const offEditForm = () => {
      editButton.value = true;
    };

    const onSubmit = () => {
      userCurrentUpdateAction(inputsProfileEdit);

      Notify.create({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: 'Su información fue actualizada!'
      });
    };

    return {
      editButton,
      onEditForm,
      offEditForm,
      onSubmit,
      inputsProfileEdit
    };
  }
});
</script>
