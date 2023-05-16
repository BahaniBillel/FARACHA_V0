import Header from "../components/header/Header";
import BottomNavigationBar from "../components/usables/BottomNavigationBar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import Footer from "../components/usables/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Component {...pageProps} />
        <BottomNavigationBar />
        <Footer />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
