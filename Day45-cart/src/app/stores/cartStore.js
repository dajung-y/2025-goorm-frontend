import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCartStore = create(
  devtools(
    persist(
      immer((set,get) => ({
        cartItems: [],
        totalItems: 0,
        totalPrice: 0,
        addItem: (item) => {
          set((state) => {
            const existItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
            if(existItem){
              existItem.quantity +=1;
            } else {
              state.cartItems.push({...item, quantity: 1});
            }
            state.totalItems +=1;
            state.totalPrice +=item.price;
          })
        }
      }))
    )
  )
)