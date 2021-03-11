import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { RechargeStateInterface } from './state';

const getters: GetterTree<RechargeStateInterface, StateInterface> = {
  userCurrentGetter(context) {
    return context.recharges
  }
};

export default getters;
