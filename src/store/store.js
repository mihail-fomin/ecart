import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productSlice from './productSlice'

const rootReducer = combineReducers({
	products: productSlice,
})

export const store = configureStore({
	reducer: rootReducer,

})
