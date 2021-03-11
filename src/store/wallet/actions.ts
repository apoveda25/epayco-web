import { Notify } from 'quasar';
import { ActionTree } from 'vuex';
import { api } from '../../boot/axios';
import { StateInterface } from '../index';
import { IWallet, IWalletFind } from './interfaces/wallet';
import { WalletStateInterface } from './state';

const actions: ActionTree<WalletStateInterface, StateInterface> = {
  async walletCurrentFindAction (context, {document, cellphone}: IWalletFind) {
    try {
      const { data } = await api.get<IWallet>('/wallets/get-balance', {params: {document, cellphone}})

      context.commit('walletCurrentFindMutation', data);
    } catch (error) {
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Ha ocurrido un error, por favor vuelva a intentarlo.'
      });
    }
  },
  async walletRechargesFindAction (context, _id: string) {
    try {
      const { data } = await api.get<IWallet>(`/wallets/${_id}`)

      context.commit('walletRechargesFindMutation', data);
    } catch (error) {
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Ha ocurrido un error, por favor vuelva a intentarlo.'
      });
    }
  },
};

export default actions;
