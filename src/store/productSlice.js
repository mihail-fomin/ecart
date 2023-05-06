import { createSlice } from "@reduxjs/toolkit";
import { sumCount, sumPrice } from "../utlis/countAndCalcPrice";


const initialState = {
	orderList: [],
	products: [
		{ id: 1, title: 'Apple', price: 10, selected: 0, stock: 12 },
		{ id: 2, title: 'Melon', price: 20, selected: 0, stock: 5 },
		{ id: 3, title: 'Apple', price: 8, selected: 0, stock: 20 },
	],
	totalPrice: 0,
}


const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const productOrderList = state.orderList.find(
				item => item.id === action.payload.id
			)
			if (productOrderList) {
				productOrderList.count++


				const productOrderGoods = state.products.find(
					item => item.id === action.payload.id
				)

				productOrderGoods.count = productOrderList.count

				state.totalCount = sumCount(state.products)
				state.totalPrice = sumPrice(state.products)

			} else {
				state.orderList.push({ ...action.payload, count: 1 })
			}
		}
	},
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer