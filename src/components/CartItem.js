

export default function CartItem({ id, title, price, quantity }) {


	return (
		<>
			<div className="flex">
				<p>{title} - <small>$</small>{price} x {quantity}</p>
			</div>

		</>
	)
}