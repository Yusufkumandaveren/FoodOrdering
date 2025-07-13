import { CartItem, Product } from "@/types";
import { randomUUID } from "expo-crypto";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};

// dont use export beacuse we are used export from useCart
const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    // if already in cart, increment quantity
    const newCartItem: CartItem = {
      id: randomUUID(), // generate / randomuuid make random string id
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);

    const existingItem = items.find((item)=> item.product === product && item.size === size  )
    if(existingItem){
      updateQuantity(existingItem.id, 1);
      return;
    }
  };


  // update quantity
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + amount }
          : item
      ).filter((item)=> item.quantity > 0)
    );
    
  };
  const total = items.reduce((sum, item)=> (sum += item.product.price * item.quantity), 0)
  //            items.reduce((sum= birikimlerin toplami, item= suanki deger)=> (islem), 0 = baslangic degeri ) 

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// custom hook
export const useCart = () => useContext(CartContext);
