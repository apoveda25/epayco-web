import { IUser } from './interfaces/user';

export interface UserStateInterface {
  userCurrent: IUser;
}

function state(): UserStateInterface {
  return {
    userCurrent: {}
  }
};

export default state;
