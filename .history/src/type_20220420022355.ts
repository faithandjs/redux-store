export enum status {
  idle = 1,
  loading,
  succeeded,
  failed,
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
}
//export interface objArr {objectType[]}