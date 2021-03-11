import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { WalletStateInterface } from './state';

const getters: GetterTree<WalletStateInterface, StateInterface> = {
  userCurrentGetter(context) {
    return context.walletCurrent
  }
};

export default getters;
