import { reactive, ref } from '@vue/composition-api';
import { IPaymentConfirm } from 'src/store/payments/interfaces/payments';
import { IPayment } from './interfaces/payments';

export const inputsPayment = reactive<IPayment>({
  mount: 0,
  sesionId: '',
  wallet: '',
  createdBy: ''
});

export const inputsPaymentConfirm = reactive<IPaymentConfirm>({
  code: '',
  sesionId: '',
  updatedBy: ''
});

export const step = ref(1);
