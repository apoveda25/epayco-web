import { reactive, ref } from '@vue/composition-api';
import { IWalletRecharge } from './interfaces/wallet-recharge';

export const inputsRechargeWallet = reactive<IWalletRecharge>({
  document: '',
  cellphone: '',
  mount: 0,
  createdBy: ''
});

export const promptButton = ref(false)
