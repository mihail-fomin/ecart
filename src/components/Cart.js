import { useSelector } from "react-redux"
import CartItem from "./CartItem"


export default function Cart() {
	const { cart, totalCount, totalPrice } = useSelector(state => state.cart)

	const getTotal = () => {
		let totalQuantity = 0
		let totalPrice = 0
		cart.forEach(item => {
			totalQuantity += item.quantity
			totalPrice += item.price * item.quantity
		})
		return { totalQuantity, totalPrice }
	}


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
			<p>{getTotal().totalQuantity}</p>
			<p>Total: <small>$</small>{getTotal().totalPrice}</p>
		</>
	)
}