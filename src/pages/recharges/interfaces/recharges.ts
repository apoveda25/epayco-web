export interface IRecharge {
  _id: string;
  mount: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface IRechargeDataTable {
  _id: string;
  mount: number;
  createdAt: string;
}


export interface IColumnTable {
  name: string;
  label: string;
  field: string | ((a: any) => string);
  required?: boolean;
  align?: string;
  sortable?: boolean;
  sort?: (a: any, b: any, rowA: Record<string, unknown>, rowB: Record<string, unknown>) => number;
  format?: (val: any, row: Record<string, unknown>) => any;
  style?: string;
  classes?: string;
  headerStyle?: string;
  headerClasses?: string;
}

export interface IColumnsTable {
  columns: IColumnTable[]
}
