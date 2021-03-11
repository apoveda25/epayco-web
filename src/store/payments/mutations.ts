import { MutationTree } from 'vuex';
import { IPayment } from './interfaces/payments';
import { PaymentStateInterface } from './state';

const mutation: MutationTree<PaymentStateInterface> = {
  paymentCreateMutation (state: PaymentStateInterface, payment: IPayment) {
    state.paymentCurrent = payment
  },
  paymentConfirmMutation (state: PaymentStateInterface, payment: IPayment) {
    state.paymentCurrent = payment
  }
};

export default mutation;
