import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { IPayment, IPaymentConfirm, IPaymentCreate } from './interfaces/payments';
import { PaymentStateInterface } from './state';

const actions: ActionTree<PaymentStateInterface, StateInterface> = {
  async paymentCreateAction(context, payment: IPaymentCreate) {
    try {
      const { data } = await api.post<IPayment>('/payments', payment)

      context.commit('paymentCreateMutation', data);
    } catch (error) {
      Notify.create({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: 'Ha ocurrido un error, por favor vuelva a intentarlo.'
      });
    }
  },
  async paymentConfirmAction(context, payment: IPaymentConfirm) {
    try {
      const { data } = await api.post<IPayment>(`/payments/${payment._id}/confirm`, payment)

      context.commit('paymentConfirmMutation', data);

      return true;
    } catch (error) {
      Notify.create({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: 'Ha ocurrido un error, por favor vuelva a intentarlo.'
      });

      return false;
    }
  },
};

export default actions;
