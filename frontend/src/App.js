import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { CartScreen } from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";


import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <Header />

      <main className="main my-3">
        <Container>
          {/* <h1>Ecommerce App</h1> */}
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/login" Component={LoginScreen} exact />
            <Route path="/profile" Component={ProfileScreen} exact />
            <Route path="/register" Component={RegisterScreen} exact />
            <Route path="/product/:id" Component={ProductDetails} exact/>
            <Route path="/cart/:id?" Component={CartScreen} exact />
            <Route path="/shipping" Component={ShippingScreen} exact />
            <Route path="/payment" Component={PaymentScreen} exact />
            <Route path="/placeorder" Component={PlaceOrderScreen} exact />


          </Routes>
        </Container>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
