import { reactive } from '@vue/composition-api';
import { ILogin } from './interfaces/login';
import { IRegister } from './interfaces/register';

export const inputsLogin = reactive<ILogin>({email: '', password: ''});

export const inputsRegister = reactive<IRegister>({ document: '', name: '', surname: '', email:'', password: '', cellphone: '' });
