import { addProduct, decrementQuantity, incrementQuantity, removeProduct } from "@/store/cartSlice"
import { useDispatch } from "react-redux"


export default function CartItem({ id, title, price, quantity }) {
	const dispatch = useDispatch()

	const addCount = () => {
		dispatch(addProduct({ id }))
	}

	const decrementCount = () => {
		dispatch(removeProduct({ id }))
	}

	return (
		<>
			<li className="flex gap-2">
				<button
					className="btn"
					onClick={decrementCount}
				>
					-1
				</button>
				<button className="btn"
					onClick={addCount}
				>
					+1
				</button>
				<p>{title} - <small>$</small>{price} x {quantity}</p>
			</li>

		</>
	)
}