export interface Entry {
  _id?: string;
  name: string;
  catagory: string;
  payee: string;
  owed: number;
  paymentDay: number;
  payed: number;
  interval: string;
}
