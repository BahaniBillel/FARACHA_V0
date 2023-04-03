import Head from "next/head";
import Header from "../components/header/Header";
import Identification from "../components/header/Identification";
import Navigation from "../components/header/Navigation";
import UpperRibbon from "../components/header/UpperRibbon";
import Hero from "../components/hero/Hero";
import SliderSwiper from "../components/hero/SliderSwiper";
import ProductSliderSmall from "../components/products/ProductSliderSmall";
import ProductSliderLong from "../components/products/ProductSliderLong";
import ProductKeenSlider from "../components/products/ProductKeenSlider";
import ProductKeenSliderSM from "../components/products/ProductKeenSliderSM";

// Images for Beauty Offers

import promo1 from "../images/promo1.jpg";
import promo2 from "../images/promo2.jpg";
import promo3 from "../images/promo3.jpg";
import promo4 from "../images/promo4.jpg";
import promo5 from "../images/promo5.jpg";
import promo6 from "../images/promo6.jpg";

// Images for Just Dropped

import dropped1 from "../images/gelato.webp";
import dropped2 from "../images/lip-butter-lamp.webp";
import dropped3 from "../images/lancome.webp";
import dropped4 from "../images/dark-spot-toner.webp";
import dropped5 from "../images/glow-recipe.webp";
import dropped6 from "../images/gelato.webp";
import dropped7 from "../images/gelato.webp";
import ProductKeenShowcase from "../components/products/ProductKeenShowCase";

const beautyOffersData = [
  {
    image: promo1,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    description:
      "Complimentary with $85 Sulwhasoo purchase.*Beauty Insider members only.Online only*Exclusions/terms apply. ",
    cta: "SHOP NOW",
    backgroundColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    feature: "new",
    details: true,
  },
  {
    image: promo2,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    description:
      "Complimentary with $85 Sulwhasoo purchase.*Beauty Insider members only.Online only*Exclusions/terms apply. ",
    cta: "SHOP NOW",
    backgroundColor: "bg-rose-300",
    feature: "new",
    details: true,
  },
  {
    image: promo3,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    description:
      "Complimentary with $85 Sulwhasoo purchase.*Beauty Insider members only.Online only*Exclusions/terms apply. ",
    cta: "SHOP NOW",
    backgroundColor: "bg-teal-700",
    feature: "new",
  },
  {
    image: promo4,
    price: 800,
    title: "Dark spot toner",
    subtitle: "Small but mighty picks to pocket right now",
    description:
      "Complimentary with $85 Sulwhasoo purchase.*Beauty Insider members only.Online only*Exclusions/terms apply. ",
    cta: "SHOP NOW",
    backgroundColor: "bg-red-500",
    feature: "new",
    details: true,
  },
  {
    image: promo5,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    description:
      "Complimentary with $85 Sulwhasoo purchase.*Beauty Insider members only.Online only*Exclusions/terms apply. ",
    cta: "SHOP NOW",
    backgroundColor: "bg-zinc-400",
    feature: "new",
  },
  {
    image: promo6,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    description:
      "Complimentary with $85 Sulwhasoo purchase.*Beauty Insider members only.Online only*Exclusions/terms apply. ",
    cta: "SHOP NOW",
    backgroundColor: "bg-amber-400",
    feature: "new",
  },
];

const justDropped = [
  {
    image: dropped1,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "ماكينة قص الشعر القابلة لإعادة الشحن",
    cta: "SHOP NOW",
    backgroundColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    feature: "new",
  },
  {
    image: dropped2,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-rose-300",
    feature: "new",
  },
  {
    image: dropped3,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-teal-700",
    feature: "new",
  },
  {
    image: dropped4,
    price: 800,
    title: "Dark spot toner",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-red-500",
    feature: "new",
  },
  {
    image: dropped5,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-zinc-400",
    feature: "new",
  },
  {
    image: dropped6,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-amber-400",
    feature: "new",
  },
  {
    image: dropped7,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-fushia-200",
    feature: "new",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Faracha</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <Header />
        <Hero />
        <ProductKeenSliderSM title="Chosen for you" data={justDropped} />
        <ProductKeenSliderSM
          title="Just Dropped"
          haveLabel={true}
          data={justDropped}
        />
        <ProductKeenSlider title="Beauty Offers" data={beautyOffersData} />
        <ProductKeenShowcase title="Showcase" data={beautyOffersData} />
      </main>
    </div>
  );
}
