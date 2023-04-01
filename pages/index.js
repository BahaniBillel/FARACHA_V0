import Head from "next/head";
import Header from "../components/header/Header";
import Identification from "../components/header/Identification";
import Navigation from "../components/header/Navigation";
import UpperRibbon from "../components/header/UpperRibbon";
import Hero from "../components/hero/Hero";
import SliderSwiper from "../components/hero/SliderSwiper";
import ProductSliderSmall from "../components/products/ProductSliderSmall";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Faracha</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        {/* <SliderSwiper /> */}
        <ProductSliderSmall title="Chosen for you" />
        <ProductSliderSmall title="Just Dropped" haveLabel={true} />
      </main>
    </div>
  );
}
