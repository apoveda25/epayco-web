export interface IWallet {
  _id: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface IPayment {
  _id?: string;
  mount?: number;
  verified?: boolean;
  code?: string;
  sesionId?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  wallet?: IWallet;
}

export interface IPaymentCreate {
  mount: number;
  sesionId: string;
  createdBy: string;
  wallet: string;
}

export interface IPaymentConfirm {
  _id: string;
  code: string;
  sesionId: string;
  updatedBy: string;
}
