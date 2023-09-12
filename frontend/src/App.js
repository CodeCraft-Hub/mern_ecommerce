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
            <Route path="/login" Component={LoginScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/product/:id" Component={ProductDetails} />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="/shipping" Component={ShippingScreen} />



          </Routes>
        </Container>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
