import { createSlice } from "@reduxjs/toolkit";
import { sumCount, sumPrice } from "../utlis/countAndCalcPrice";


const initialState = {
	products: [
		{ id: 1, title: 'Apple', selected: 0, price: 10, stock: 12 },
		{ id: 2, title: 'Melon', selected: 0, price: 20, stock: 5 },
		{ id: 3, title: 'Apple', selected: 0, price: 8, stock: 20 },
	],
	cart: [],
}


const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const itemInStock = state.products.find(item => item.id === action.payload.id)
			const itemInCart = state.cart.find(item => item.id === action.payload.id)
			itemInStock.stock--
			if (itemInCart) {
				itemInCart.quantity++
				itemInCart.sum = itemInCart.quantity * itemInCart.price
				state.totalPrice += itemInCart.sum
				itemInStock.selected++
			} else {
				state.cart.push({ ...action.payload, quantity: 1 })
				state.totalPrice += action.payload.price
				itemInStock.selected++
			}
		}
	},
	removeProduct: (state, action) => {
		state.cart.filter(item => item.id !== action.payload.id)
	},
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer