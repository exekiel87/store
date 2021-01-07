export interface ItemList{
  id: string;
  title: string;
  price: {
    currency: string,
    amount: number,
    decimals: number
  };
  picture: string;
  condition: string;
  free_shipping: boolean;    
};

export interface Item extends ItemList{
  sold_quantity: number;
  description: string;
}
  
export  interface Items{
  author: author;
  categories: string[];
  items: ItemList[];
};

export interface author{
  name: string;
  lastname: string;
}