import { MutationTree } from 'vuex';
import { IUser } from './interfaces/user';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  userCurrentFindMutation (state: UserStateInterface, data: IUser) {
    state.userCurrent = data;
  }
};

export default mutation;
