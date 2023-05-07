import { useSelector } from "react-redux"
import CartItem from "./CartItem"


export default function Cart() {
	const { cart, totalCount } = useSelector(state => state.cart)



	return (
		<>
			<div className="my-3">
				{!cart.length ? 'Your cart is empty' :
					<ul>
						{cart.map(product => (
							<CartItem key={product.id} {...product} />
						))}
					</ul>
				}
			</div>
			<p>Total: <small>$</small>{totalCount}</p>
		</>
	)
}