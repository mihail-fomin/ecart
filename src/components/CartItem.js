

export default function CartItem({ id, title, price, quantity, sum }) {


	return (
		<>
			<div className="flex">
				<p>{title} - <small>$</small>{price} x {quantity} = {sum}</p>
			</div>

		</>
	)
}