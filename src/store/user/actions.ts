import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { IUser } from './interfaces/user';
import { UserStateInterface } from './state';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  async userCurrentFindAction (context, _id: string) {
    try {
      const { data } = await api.get<IUser>(`/users/${_id}`)

      context.commit('userCurrentFindMutation', data);
    } catch (error) {
      Notify.create({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: 'Ha ocurrido un error, por favor vuelva a intentarlo.'
      });
    }
  }
};

export default actions;
