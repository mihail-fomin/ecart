import * as React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../store/cartSlice"


export default function Catalog() {
	const { products, cart } = useSelector(state => state.cart)
	const dispatch = useDispatch()

	const [selected, setSelected] = React.useState(0)

	const handleAddProduct = (item) => {
		dispatch(addProduct(item))
		// setSelected(prev => prev + 1)
	}

	return (
		<>
			<ul>
				{
					products.map(product => (
						<li
							className="flex items-center mt-2"
							key={product.id}
						>
							<button
								className="px-2 mr-2 border-2 rounded border-sky-700 hover:bg-sky-100"
								type="button"
								onClick={() => dispatch(addProduct(product))}
							>
								Add to Cart
							</button>
							{product.title} - ${product.price}({selected} selected, {product.stock} in stock)
						</li>
					))
				}

			</ul>
		</>
	)
}
