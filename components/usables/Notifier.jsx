import { toast, ToastContainer } from "react-toastify";
// Notifying the dispatched product
const notify = (productName) => {
  toast(`${productName} was added to basket`, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: "foo-bar text-xs font-light",
  });
};
const Notifier = notify();

export default Notifier;
