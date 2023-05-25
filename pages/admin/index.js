import React from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage, db } from "../../firebase";

import { doc, setDoc, Timestamp } from "firebase/firestore";

function Admin() {
  const docData = [
    {
      id: 1,
      name: "Guanjing 24K Pure Gold Collagen 30ml",
      subtitle:
        "Enrichi d'ingrédients nourrissants et de feuilles d'or pour une peau radieuse et réparée.",
      productImage:
        "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml-04.webp",
      price: 1400,
      exPrice: 1800,
      category: "skincare",
      label: "Soin de Peau",
      new: true,
      sku: 6,
      images: [
        "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml-04.webp",
        "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml-02.webp",
        "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml-03.webp",
        "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml.webp",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "/" },
        { id: 2, name: "Soin de Peau", href: "/skincare" },
      ],

      description: `Ce sérum facial est enrichi en ingrédients éclaircissants et hydratants tels que l'arbutine pour atténuer efficacement la mélanine, favoriser la synthèse du collagène, combattre les signes visibles de vieillissement et hydrater la peau, la laissant lumineuse.`,
      features: [
        `Le puissant pouvoir revitalisant de l'or actif 24 carats peut 
      favoriser le métabolisme et lutter contre le vieillissement`,
        `Hydrate, guérit les ridules ; lisse et raffermit la peau ; soin efficace ; redonne à la peau sa splendeur.`,
        ` Peut rapidement pénétrer le derme, libérer des ions actifs d'or, améliorer l'absorption de la peau de 10 fois.`,
        `Améliore les ridules, les ridules sèches, illumine uniformément la peau, revitalise et hydrate. `,
        `Contient 7 types de combinaisons de peptides qui nourrissent la peau, éliminent les rides, rendent la peau plus lisse et améliorent son élasticité`,
        `Contient des extraits de plantes tels que le lotus et le Wujiapi, ainsi que du collagène hydrolysé extrait du cartilage de saumon pour augmenter l'élasticité de la peau`,
        `retenir l'eau et lutter contre les signes du vieillissement, aidant à retrouver une peau jeune. `,
        `L'or pur 24 carats détoxifie, raffermit, éclaircit la peau et favorise le métabolisme.`,
        "Les extraits de plantes marines en profondeur hydratent et raffermissent la peau.",
      ],
      usage: [
        `Après avoir nettoyé la peau, prenez une quantité appropriée de sérum. Appliquez-le uniformément sur la peau et massez doucement jusqu'à absorption complète.`,
        `Si vous avez une crème, appliquez une quantité suffisante pour conserver l'essence.`,
        `Utilisez une fois le matin et une fois le soir.`,
      ],
      notes: [
        `Veuillez tenir le produit hors de portée des enfants.`,
        `À usage externe uniquement, évitez tout contact avec les yeux.`,
        `Cessez toute utilisation si vous ressentez une quelconque gêne.`,
      ],
      reviews: [],
      orders: [],
      similar: ["skincare"],
    },
    {
      id: 2,
      name: "Huile Essentielle AICHUN BEAUTY à l'Ail",
      subtitle:
        "Aichun Beauty est une crème naturelle à base d'huile essentielle d'ail pour raffermir et agrandir les fesses.",
      productImage:
        "/images/productsImages/Huile-Essentielle-AICHUN-BEAUTY-à-l'Ail-élargissement-fesses.jpeg",
      price: 1300,
      exPrice: 1800,
      category: "bodybath",
      label: "Corps & Bain",
      new: true,
      sku: 12,
      images: [
        "/images/productsImages/Huile-Essentielle-AICHUN-BEAUTY-à-l'Ail-élargissement-fesses.jpeg",
        "/images/productsImages/Huile-Essentielle-AICHUN-BEAUTY-à-l'Ail-élargissement-fesses-03.jpeg",
        "/images/productsImages/Huile-Essentielle-AICHUN-BEAUTY-à-l'Ail-élargissement-fesses-02.jpeg",
        "/images/productsImages/Huile-Essentielle-AICHUN-BEAUTY-à-l'Ail-élargissement-fesses-02.jpeg",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "/" },
        { id: 2, name: "Corps & Bain", href: "/bodybath" },
      ],

      description: `L'huile essentielle de rose musquée est une solution efficace pour aider à raffermir les fesses, réduire les vergetures et maintenir l'équilibre naturel de la peau. Elle est extraite des graines de l'églantier.`,
      features: [],
      usage: [
        `AUtilisez une serviette chaude pour chauffer la hanche pendant 1 à 2 minutes`,
        `Appliquez uniformément le produit sur la fesse.`,
        `Effectuez un massage avec une main pour améliorer la hanche, en alternant les mains environ 10 fois.`,
        `Soulevez la hanche de bas en haut en alternant les mains, environ 10 fois.`,
        `Effectuez un massage en utilisant le pouce et les deux mains en alternance, environ 10 fois.`,
        `Massez la hanche en effectuant des mouvements en forme de cercle avec les deux mains, environ 10 fois.`,
        `Soulevez la hanche en utilisant simultanément les deux mains, en les dirigeant vers l'intérieur et vers le haut, environ 10 fois.`,
      ],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["body&bath"],
    },
    {
      id: 3,
      name: "Crème AICHUN BEAUTY à la papaye",
      subtitle:
        "pour l'élargissement et le raffermissement de la poitrine, efficace en 3 jours, contenance de 100 ml",
      productImage:
        "/images/productsImages/Crème-AICHUN-BEAUTY-à-la-papaye-pour-l'élargissement-poitrine.jpg",
      price: 1300,
      exPrice: 1800,
      category: "skincare",
      label: "Soin de Peau",
      new: true,
      sku: 12,
      images: [
        "/images/productsImages/Crème-AICHUN-BEAUTY-à-la-papaye-pour-l'élargissement-poitrine.jpg",
        "/images/productsImages/Crème-AICHUN-BEAUTY-à-la-papaye-pour-l'élargissement-poitrine-02.jpg",
        "/images/productsImages/Crème-AICHUN-BEAUTY-à-la-papaye-pour-l'élargissement-poitrine-03.jpg",
        "/images/productsImages/Crème-AICHUN-BEAUTY-à-la-papaye-pour-l'élargissement-poitrine.webp",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "Soin de Peau", href: "/skincare" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["skincare", "bodybath"],
    },
    {
      id: 4,
      name: "BELLA BEAUTY-HAIR REPAIR",
      subtitle: "",
      productImage:
        "/images/productsImages/bella-beauty-serum-cheveaux-reparation-sans-sulfates-mauve-02.jpg",
      price: 900,
      exPrice: 1300,
      category: "hair",
      label: "Chevaux",
      new: true,
      sku: 16,
      images: [
        "/images/productsImages/bella-beauty-serum-cheveaux-reparation-sans-sulfates-mauve-01.jpg",
        "/images/productsImages/bella-beauty-serum-cheveaux-reparation-sans-sulfates-jaune.jpg",
        "/images/productsImages/bella-beauty-serum-cheveaux-reparation-sans-sulfates-jaune.jpg",
        "/images/productsImages/bella-beauty-serum-cheveaux-reparation-sans-sulfates-jaune.jpg",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "Cheveux", href: "/hair" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["hair"],
    },
    {
      id: 5,
      name: "dr rashel green tea coffret",
      subtitle: "",
      productImage: "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET.webp",
      price: 8500,
      exPrice: 10000,
      category: "skincare",
      label: "Soin de Peau",
      new: true,
      sku: 1,
      images: [
        "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET-02.webp",
        "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET-03.webp",
        "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET-04.webp",
        "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET.webp",
        "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET-05.webp",
        "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET-06.webp",
        "/images/productsImages/DR-RASHEL-GREEN-TEA-COFFRET-07.webp",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "soin de peau", href: "/skincare" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["hair", "skincare", "bodybath"],
    },
    {
      id: 6,
      name: "Parfum Scandal 100ml-Rose-(copie)",
      subtitle: "",
      productImage: "/images/productsImages/parfum-scandal-100ml-rose.jpg",
      price: 1400,
      exPrice: "",
      category: "perfum",
      label: "Parfum",
      new: true,
      sku: 9,
      images: [
        "/images/productsImages/parfum-scandal-100ml-rose.jpg",
        "/images/productsImages/parfum-scandal-100ml-rose.jpg",
        "/images/productsImages/parfum-scandal-100ml-rose.jpg",
        "/images/productsImages/parfum-scandal-100ml-rose.jpg",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "Parfum", href: "/perfum" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["perfum"],
    },
    {
      id: 7,
      name: "Parfum Scandal 100ml-Rouge-(copie)",
      subtitle: "",
      productImage: "/images/productsImages/parfum-scandal-100ml-rouge.jpg",
      price: 1400,
      exPrice: "",
      category: "perfum",
      label: "Parfum",
      new: true,
      sku: 9,
      images: [
        "/images/productsImages/parfum-scandal-100ml-rouge.jpg",
        "/images/productsImages/parfum-scandal-100ml-rouge.jpg",
        "/images/productsImages/parfum-scandal-100ml-rouge.jpg",
        "/images/productsImages/parfum-scandal-100ml-rouge.jpg",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "Parfum", href: "/perfum" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["perfum"],
    },
    {
      id: 8,
      name: "Parfum Scandal 100ml-Orange-(copie)",
      subtitle: "",
      productImage: "/images/productsImages/parfum-scandal-100ml-orange.jpg",
      price: 1400,
      exPrice: "",
      category: "perfum",
      label: "Parfum",
      new: true,
      sku: 9,
      images: [
        "/images/productsImages/parfum-scandal-100ml-orange.jpg",
        "/images/productsImages/parfum-scandal-100ml-orange.jpg",
        "/images/productsImages/parfum-scandal-100ml-orange.jpg",
        "/images/productsImages/parfum-scandal-100ml-orange.jpg",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "Parfum", href: "/perfum" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["perfum"],
    },
    {
      id: 9,
      name: "ONE STEP HAIR DRYER AND STYLER | مجفف ومصفف الشعر",
      subtitle: "",
      productImage: "/images/productsImages/one-step-hair-dryer-styler-07.jpg",
      price: 3500,
      exPrice: "",
      category: "hair",
      label: "Chevaux",
      new: true,
      sku: 12,
      images: [
        "/images/productsImages/one-step-hair-dryer-styler-05.jpg",
        "/images/productsImages/one-step-hair-dryer-styler-04.jpg",
        "/images/productsImages/one-step-hair-dryer-styler-02.jpg",
        "/images/productsImages/one-step-hair-dryer-styler-03.jpg",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "Chevaux", href: "/hair" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["hair"],
    },
    {
      id: 30,
      name: "Pack Curvy | رفع وشد الصدر و الأرداف",
      subtitle: "",
      productImage:
        "/images/productsImages/pack-curvy-creme-poitrine-huile-fesse.jpg",
      price: 2100,
      exPrice: "",
      category: "packs",
      label: "Pack Curvy",
      new: true,
      sku: 12,
      images: [
        "/images/productsImages/pack-curvy-creme-poitrine-huile-fesse.jpg",
        "/images/productsImages/pack-curvy-creme-poitrine-huile-fesse-01.jpg",
        "/images/productsImages/pack-curvy-creme-poitrine-huile-fesse-02.jpg",
        "/images/productsImages/pack-curvy-creme-poitrine-huile-fesse.jpg",
      ],

      breadcrumbs: [
        { id: 1, name: "Faracha", href: "#" },
        { id: 2, name: "Packs", href: "/packs" },
      ],

      description: ``,
      features: [],
      usage: [],
      notes: [],
      reviews: [],
      orders: [],
      similar: ["packs"],
    },
  ];

  const uploadData = async () => {
    try {
      // Loop through each item in docData array and upload to Firestore
      for (const item of docData) {
        await setDoc(doc(db, "products", item.name), item);
      }
      alert("Data was successfully uploaded to the Firestore database.");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="grid grid-cols-7 h-screen">
      <div className="col-span-2 bg-slate-900 text-white p-5">
        <div
          className="rounded-md py-1 px-4 bg-slate-300 text-black cursor-pointer hover:scale-95 transition-all 
        duration-150"
          onClick={uploadData}
        >
          upload data
        </div>
      </div>
      <div className="col-span-5 flex flex-col justify-center items-center bg-white">
        <p>content</p>
      </div>
    </div>
  );
}

export default Admin;
