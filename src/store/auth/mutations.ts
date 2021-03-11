import { MutationTree } from 'vuex';
import { IUser } from './interfaces/user';
import { AuthStateInterface } from './state';

const mutation: MutationTree<AuthStateInterface> = {
  loginMutation (state: AuthStateInterface, data: IUser) {
    state.userCurrent = data;
  },
  registerMutation (state: AuthStateInterface, data: IUser) {
    state.userCurrent = data;
  },
  userCurrentUpdateMutation (state: AuthStateInterface, data: IUser) {
    state.userCurrent = data;
  }
};

export default mutation;
