import { IPayment } from './interfaces/payments';

export interface PaymentStateInterface {
  paymentCurrent: IPayment;
}

function state(): PaymentStateInterface {
  return {
    paymentCurrent: {}
  }
};

export default state;
