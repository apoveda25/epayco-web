import { reactive, ref } from '@vue/composition-api';
import { IProfileEdit } from './interfaces/profile';

export const inputsProfileEdit = reactive<IProfileEdit>({
  _id: '',
  name: '',
  surname: '',
  email: '',
  cellphone: ''
});

export const editButton = ref(true)
