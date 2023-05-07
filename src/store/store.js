import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
	cart: cartSlice,
})

export const store = configureStore({
	reducer: rootReducer,

})
