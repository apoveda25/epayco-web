interface IWallet {
  _id: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface IUser {
  _id?: string;
  document?: string;
  name?: string;
  surname?: string;
  email?: string;
  cellphone?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  wallet?: IWallet;
}
