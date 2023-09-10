import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import { CartScreen } from "./screens/CartScreen";


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
            <Route path="/product/:id" Component={ProductDetails} />
            <Route path="/cart/:id?" Component={CartScreen} />


          </Routes>
        </Container>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
