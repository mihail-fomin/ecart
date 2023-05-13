import { store } from '../store/store'
import { Provider } from 'react-redux'
import Cart from "@/components/Cart"
import Catalog from "../components/Catalog"

export default function App() {

	return (
		<Provider store={store}>
			<div className="mx-auto w-[90%]">
				<h1 className="mt-3 text-xl">Ecart</h1>
				<Cart />
				<hr />
				<Catalog />
			</div>
		</Provider>
	)
}
