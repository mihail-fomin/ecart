import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	stock: [
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
			const itemInStock = state.stock.find(item => item.id === action.payload.id)
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
		},
		removeItem: (state, action) => {
			state.cart = state.cart.filter(item => item.id !== action.payload.id)
		},
		decrementQuantity: (state, action) => {
			const itemInStock = state.stock.find(item => item.id === action.payload.id)
			const itemInCart = state.cart.find(item => item.id === action.payload.id)
			itemInStock.stock++
			itemInStock.selected--
			itemInCart.quantity--
		}
	},
})

export const { addProduct, removeItem, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer