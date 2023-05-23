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
import Pixel01 from "../components/Pixel/facebook/pixel-1";
import { useEffect } from "react";
import Script from "next/script";

import * as fbq from "../lib/fpixel";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Exluding Header for thankyou page and login
  const hideHeaderFooter =
    router.pathname === "/thankyou" || router.pathname === "/login";
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {!hideHeaderFooter && <Header />}
        {/* Global Site Code Pixel - Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
          }}
        />
        <Component {...pageProps} />
        <Pixel01 />
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
