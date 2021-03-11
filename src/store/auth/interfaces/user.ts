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
}

export interface IUserUpdate {
  _id: string;
  document: string;
  name: string;
  surname: string;
  email: string;
  cellphone: string;
  updatedBy: string;
  wallet: string;
}
