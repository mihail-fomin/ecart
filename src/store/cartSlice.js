import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	stock: [
		{ id: 1, title: 'Apple', selected: 0, price: 10, stock: 12, },
		{ id: 2, title: 'Melon', selected: 0, price: 20, stock: 5, },
		{ id: 3, title: 'Apple', selected: 0, price: 8, stock: 20, },
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