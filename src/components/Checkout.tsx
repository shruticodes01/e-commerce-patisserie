import { useCart } from "../context/Cart/useCart";
import { useUserProgress } from "../context/UserProgress/useUserProgress";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function Checkout() {
  const { items } = useCart();
  const { progress, hideCheckout } = useUserProgress();

  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const handleClose = () => {
    hideCheckout();
  };

  return (
    <Modal
      className="max-w-[50%] p-4 mx-auto my-auto animate-slide-in-from-right"
      open={progress === "checkout"}
    >
      <form className="flex flex-col gap-2">
        <h2 className="mb-4 text-2xl font-bold">Checkout</h2>
        <p>
          Total Amount: <strong>{currencyFormatter.format(cartTotal)}</strong>
        </p>

        <Input label="Full Name" id="full-name" type="text" required />
        <Input label="Email" id="email" type="email" required />
        <Input label="Street" id="street" type="text" required />
        <div className="flex gap-4">
          <Input label="Postal Code" id="postal-code" type="text" required />
          <Input label="City" id="city" type="text" required />
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Button type="button" variant="text" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit Order</Button>
        </div>
      </form>
    </Modal>
  );
}
