import { Notify } from 'quasar';
import { ActionTree } from 'vuex';
import { api } from '../../boot/axios';
import { StateInterface } from '../index';
import { IRecharge, IRechargeCreate } from './interfaces/recharge';
import { RechargeStateInterface } from './state';

const actions: ActionTree<RechargeStateInterface, StateInterface> = {
  async rechargeCreateAction (context, recharge: IRechargeCreate) {
    try {
      const { data } = await api.post<IRecharge>('/recharges', recharge)

      context.commit('rechargeCreateMutation', data);
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
