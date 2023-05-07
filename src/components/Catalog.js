import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../store/cartSlice"


export default function Catalog() {
	const { products, cart } = useSelector(state => state.cart)
	const dispatch = useDispatch()

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
								onClick={() => {
									dispatch(addProduct(product.id, product.title, product.price))
									console.log('cart: ', cart)
								}}
							>
								Add to Cart
							</button>
							{product.title} - ${product.price} ({product.selected} selected, {product.stock} in stock)
						</li>
					))
				}

			</ul>
		</>
	)
}
