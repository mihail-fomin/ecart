import * as React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../store/cartSlice"
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { CartItem } from '../store/cartSlice'

export default function Catalog() {
  const { stock } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()


  return (
    <ul>
    {
      stock.map(product: CartItem => (
        <li
              className  = "flex items-center mt-2"
              key = { product.id }
        >
        <button
                className="px-2 mr-2 border-2 rounded border-sky-700 hover:bg-gray-100"
                type = "button"
                disabled = { product.stock === 0 }
                onClick = {() => {
        dispatch(addProduct(product.id))
    }}
  )
}
