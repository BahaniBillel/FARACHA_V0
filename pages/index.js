import Head from "next/head";
import Hero from "../components/hero/Hero";

// import { PrismaClient } from "@prisma/client";

// Components
import ProductKeenSlider from "../components/products/ProductKeenSlider";
import ProductKeenSliderSM from "../components/products/ProductKeenSliderSM";
import { beautyOffersData, justDropped } from "../db/ImagesDB";
import ProductKeenShowcase from "../components/products/ProductKeenShowCase";
import ProductKeenSliderTN from "../components/products/ProductKeenSliderTN";
import SliderCardTN from "../components/cards/SliderCardTN";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Maquillage, Soins de la peau, Parfums, Produits capillaires et de
          beauté | Faracha
        </title>
        <meta
          name="description"
          content="
          Découvrez notre boutique en ligne spécialisée dans les soins de beauté pour femmes. Des produits de qualité supérieure pour 
          sublimer votre apparence et prendre soin de vous. Achetez les dernières tendances en maquillage, soins de la peau, parfums et bien plus encore. Profitez d'une expérience de magasinage en ligne facile et sécurisée. Livraison rapide et service clientèle exceptionnel. Ressentez-vous belle, confiante et radieuse avec nos produits de beauté de premier choix. Explorez notre sélection dès maintenant !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <Hero />
        <ProductKeenSliderSM title="Chosen for you" data={justDropped} />
        <ProductKeenSliderSM
          title="Just Dropped"
          haveLabel={true}
          data={justDropped}
        />
        <ProductKeenSlider title="Beauty Offers" data={beautyOffersData} />
        <ProductKeenShowcase title="Showcase" data={beautyOffersData} />
        <ProductKeenSliderTN
          title="Selling fast"
          data={justDropped}
          bottomLine={true}
        />

        <SliderCardTN />
      </main>
    </div>
  );
}
