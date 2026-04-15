import "./App.css";
import Cart from "./components/Cart/Cart";
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
          <Cart />
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
