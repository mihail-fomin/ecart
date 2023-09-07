import { createAction, createSlice, PrepareAction } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


export interface Item {
  id: number,
  title: string,
  price: number,
  stock: number,
}

export interface CartItem {
  id: number,
  quantity: number,
}

// let myMap = new Map<string, number>();


interface AppState {
  stock: { [key: number]: Item },
  cart: CartItem[]
}

const initialState: AppState = {
  stock: [
    { id: 1, title: 'Apple', price: 10, stock: 12, },
    { id: 2, title: 'Melon', price: 20, stock: 5, },
    { id: 3, title: 'Apple', price: 8, stock: 20, },
  ],
  cart: [],
}

 const state = localStorage.getItem('AppState')
const loadFromLocalStorage = createAction <PrepareAction<AppState>, string>('cart/loadFromLocalStorage',(state) => {
  return {
    payload: state
  }
})

loadFromLocalStorage(state)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadFromLocalStorage: (state) => {
      const storedItems = localStorage.getItem('cartItems');
      if (!!storedItems) {
        state.cart = JSON.parse(storedItems);
      }
    },
    addProduct: (state, action: PayloadAction<number>) => {
      const itemInStock = state.stock.find(item => item.id === action.payload)
      const itemInCart = state.cart.find(item => item.id === action.payload)
      itemInStock.stock--
      if (itemInCart) {
        itemInCart.quantity++
        itemInCart.sum = itemInCart.quantity * itemInCart.price
        state.totalPrice += itemInCart.sum
        itemInStock.selected++
        if (itemInStock.stock === 0) {
          itemInCart.full = true
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
        state.totalPrice += action.payload.price
        itemInStock.selected++
      }
    },
    removeItem: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id)
      const itemInStock = state.stock.find(item => item.id === action.payload.id)
      itemInStock.stock += itemInStock.selected
      itemInStock.selected = 0
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id)
      const itemInStock = state.stock.find(item => item.id === action.payload.id)

      if (itemInCart.quantity > 1) {
        // making increment button active
        itemInCart.full = false

        itemInCart.quantity--
        const itemInStock = state.stock.find(item => item.id === action.payload.id)
        itemInStock.selected--
        itemInStock.stock++
      } else {
        // increment item in stock first
        itemInStock.stock++

        state.cart = state.cart.filter(item => item.id !== action.payload.id)
        itemInStock.selected = 0
      }

    }
  },
})

export const { addProduct, removeItem, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer