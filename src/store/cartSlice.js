import { createSlice } from "@reduxjs/toolkit";
import { sumCount, sumPrice } from "../utlis/countAndCalcPrice";


const initialState = {
	products: [
		{ id: 1, title: 'Apple', price: 10, stock: 12 },
		{ id: 2, title: 'Melon', price: 20, stock: 5 },
		{ id: 3, title: 'Apple', price: 8, stock: 20 },
	],
	cart: [],
	totalCount: 0,
	totalPrice: 0,
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
				state.totalCount += itemInCart.sum
			} else {
				state.cart.push({ ...action.payload, quantity: 1 })
			}
		}
	},
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer