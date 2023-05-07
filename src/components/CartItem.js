

export default function CartItem({ title, price, quantity }) {


	return (
		<>
			<div className="flex">
				<p>{title} - <small>$</small>{price} x {quantity}</p>
			</div>

		</>
	)
}