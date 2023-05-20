import Head from "next/head";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const hideHeaderFooter =
    router.pathname === "/thankyou" || router.pathname === "/login";
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {!hideHeaderFooter && <Header />}
        <Component {...pageProps} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Découvrez les dernières nouveautés en matière de beauté chez Faracha ! Explorez une sélection inégalée de maquillage, soins de la peau, 
        produits capillaires, parfums et bien plus encore, provenant de marques classiques et émergentes."
          />
        </Head>
        <BottomNavigationBar />
        {!hideHeaderFooter && <Footer />}
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
