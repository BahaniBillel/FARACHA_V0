import Head from "next/head";
import Header from "../components/header/Header";
import Identification from "../components/header/Identification";
import Navigation from "../components/header/Navigation";
import UpperRibbon from "../components/header/UpperRibbon";
import Hero from "../components/hero/Hero";

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
      </main>
    </div>
  );
}
