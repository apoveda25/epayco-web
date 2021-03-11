export interface IRecharge {
  _id: string;
  mount: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface IRecharges {
  recharges: IRecharge[];
}

export interface IRechargeCreate {
  document: string;
  cellphone: string;
  mount: number;
  createdBy: string;
}
