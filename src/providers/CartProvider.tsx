import { CartItem, Product } from "@/types";
import { randomUUID } from "expo-crypto";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
};

// dont use export beacuse we are used export from useCart
const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
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
  };

  // update quantity
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items.map((item) =>
        item.id === itemId
          ? item
          : { ...item, quantity: item.quantity + amount }
      ).filter((item)=> item.quantity > 0)
    );
  };

  console.log(items);
  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// custom hook
export const useCart = () => useContext(CartContext);
