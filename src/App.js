import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import ProductsPage from "./Components/product/ProductsPage";
import ProductDetails from "./Components/product/ProductDetails";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe(
	"pk_test_51IOaq7AV8I6tcudS4uavTZsD5jExC3ZLLFc89GVtS79LJncUB1hLNfIPw4p8gkL2L2Val7aTjUs8arZoxEjImXnu00tjawfGDK"
);
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login"></Route>
					<Route path="/productdetail">
						<Nav />
						<ProductDetails />
					</Route>
					<Route path="/cart">
						<Nav />
						<Checkout />
					</Route>
					<Route path="/checkout">
						<Elements stripe={promise}>
							<Nav />
						<Payment />		
						</Elements>
					</Route>
					<Route path="/">
						<Nav />
						<ProductsPage />
					<Route path="/payment">
					</Route>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
