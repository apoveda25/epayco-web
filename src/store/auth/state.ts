import { IUser } from './interfaces/user';


export interface AuthStateInterface {
  userCurrent: IUser;
}

function state(): AuthStateInterface {
  return {
    userCurrent: {
    }
  }
};

export default state;
