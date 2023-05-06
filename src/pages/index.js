import OrderList from "../components/OrderList"
import Inventory from "../components/Inventory"
import { store } from '../store/store'
import { Provider } from 'react-redux'

export default function App() {

	return (
		<Provider store={store}>
			<div className="container mx-auto">
				<h1 className="mt-3 text-xl">Ecart</h1>
				<OrderList />
				<hr />
				<Inventory />
			</div>
		</Provider>
	)
}
