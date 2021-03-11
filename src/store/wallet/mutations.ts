import { MutationTree } from 'vuex';
import { IWallet } from './interfaces/wallet';
import { WalletStateInterface } from './state';

const mutation: MutationTree<WalletStateInterface> = {
  walletCurrentFindMutation(state: WalletStateInterface, data: IWallet) {
    state.walletCurrent = data;
  },
  walletRechargesFindMutation(state: WalletStateInterface, data: IWallet) {
    state.walletCurrent = data;
  }
};

export default mutation;
