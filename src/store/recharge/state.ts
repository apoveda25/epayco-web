import { IRecharge } from './interfaces/recharge';


export interface RechargeStateInterface {
  recharges: IRecharge[];
}

function state(): RechargeStateInterface {
  return {
    recharges: []
  }
};

export default state;
