export enum status {
  idle = 1,
  loading,
  succeeded,
  failed,
  postSuccess
}
export enum msg {
  out = 0,
  added,
  in ,
}

export interface dataState {
  data: {
    items: objectType[];
    status: number;
  };
  expandedItem: {
    item: objectType;
    status: number;
  };
}
export interface objectType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  count: number
  total: number
  message? : number
}
export interface objArr {
   cartItems: {
      items: objectType[],
      grandTotal : number;
    };
}
export interface cartProp {
  path: string
}
export interface msgProp {
  itemE: objectType
}
export interface numberProp {
  n: number;
  amnt?: number;
}
