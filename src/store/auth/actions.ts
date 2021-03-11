import { Notify } from 'quasar';
import { ActionTree } from 'vuex';
import { api } from '../../boot/axios';
import { ILogin } from '../../pages/auth/interfaces/login';
import { IRegister } from '../../pages/auth/interfaces/register';
import { StateInterface } from '../index';
import { IUser, IUserUpdate } from './interfaces/user';
import { AuthStateInterface } from './state';

const actions: ActionTree<AuthStateInterface, StateInterface> = {
  async loginAction (context, login: ILogin) {
    try {
      const { data } = await api.post<IUser>('/authentication/login', login)

      context.commit('loginMutation', data);
    } catch (error) {
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Correo o contraseña incorrectas.'
      });
    }
  },
  async registerAction (context, register: IRegister) {
    try {
      const { data } = await api.post<IUser>('/authentication/register', register)

      context.commit('registerMutation', data);
    } catch (error) {
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Ha ocurrido un error, intente nuevamente.'
      });
    }
  },
  async userCurrentUpdateAction (context, user: IUserUpdate) {
    try {
      const { data } = await api.patch<IUser>('/users', user)

      context.commit('userCurrentUpdateMutation', data);
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
