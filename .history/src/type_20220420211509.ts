export enum status {
  idle = 1,
  loading,
  succeeded,
  failed,
  postSuccess
}
export enum msg {
  in = 1,
  added
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
  count?: number
}
export interface objArr {
    [key:string]: {
      items: objectType[],
      msg: number;
    };
}
export interface cartProp {
  path: string
}