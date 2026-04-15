import "./App.css";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header/Header";
import { CartContextProvider } from "./context/Cart/CartContext";
import { UserProgressContextProvider } from "./context/UserProgress/UserProgressContext";
import Home from "./pages/home/Home";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <main>
          <Home />
        </main>
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
