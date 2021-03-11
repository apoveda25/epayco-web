import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AuthStateInterface } from './state';

const getters: GetterTree<AuthStateInterface, StateInterface> = {
  userCurrentGetter(context) {
    return context.userCurrent
  }
};

export default getters;
