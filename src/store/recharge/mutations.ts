import { MutationTree } from 'vuex';
import { IRecharge } from './interfaces/recharge';
import { RechargeStateInterface } from './state';

const mutation: MutationTree<RechargeStateInterface> = {
  rechargeCreateMutation (state: RechargeStateInterface, data: IRecharge) {
    state.recharges.push(data);
  }
};

export default mutation;
