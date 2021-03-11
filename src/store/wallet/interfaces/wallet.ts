export interface IWalletFind {
  document: string;
  cellphone: number;
}


interface IUser {
  _id: string;
  document: string;
  name: string;
  surname: string;
  email: string;
  cellphone: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

interface IRecharge {
  _id: string;
  mount: number;
  createdAt: Date;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface IWallet {
  _id?: string;
  balance?: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
  user?: IUser;
  recharges?: IRecharge[];
}
