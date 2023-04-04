import Header from "../components/header/Header";
import BottomNavigationBar from "../components/usables/BottomNavigationBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <BottomNavigationBar />
    </div>
  );
}

export default MyApp;
