import * as React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../store/cartSlice"


export default function Catalog() {
	const { stock, cart } = useSelector(state => state.cart)
	const dispatch = useDispatch()


	return (
		<>
			<ul>
				{
					stock.map(product => (
						<li
							className="flex items-center mt-2"
							key={product.id}
						>
							<button
								className="px-2 mr-2 border-2 rounded border-sky-700 disabled:text-gray-400 disabled:border-sky-300 disabled:cursor-not-allowed hover:bg-gray-100"
								type="button"
								disabled={product.stock === 0}
								onClick={() => {
									dispatch(addProduct(product))
								}}
							>
								Add to Cart
							</button>
							{product.title} - ${product.price}({product.selected} selected, {product.stock} in stock)
						</li>
					))
				}
			</ul>
		</>
	)
}
