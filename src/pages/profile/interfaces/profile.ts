export interface IProfileRead {
  _id: string;
  document: string;
  name: string;
  surname: string;
  email: string;
  cellphone: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface IProfileUpdate {
  name: string;
  surname: string;
  email: string;
  cellphone: string;
}

export interface IProfileEdit {
  _id: string;
  name: string;
  surname: string;
  email: string;
  cellphone: string;
  updatedBy: string;
}

export interface IProfileShow {
  document: boolean;
  createdAt: boolean;
  updatedAt: boolean;
}
