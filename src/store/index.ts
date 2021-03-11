import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import auth from './auth/index';
import { AuthStateInterface } from './auth/state';
import payment from './payments/index';
import { PaymentStateInterface } from './payments/state';
import recharge from './recharge/index';
import { RechargeStateInterface } from './recharge/state';
import user from './user/index';
import { UserStateInterface } from './user/state';
import wallet from './wallet/index';
import { WalletStateInterface } from './wallet/state';


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  auth: AuthStateInterface;
  wallet: WalletStateInterface;
  recharge: RechargeStateInterface;
  user: UserStateInterface;
  payment: PaymentStateInterface;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      auth, wallet, recharge, user, payment
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
