import React from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage, db } from "../../firebase";

// import Vaseline from "../../public/images/productsImages";

import { doc, setDoc, Timestamp } from "firebase/firestore";

function Admin() {
  const docData = {
    stringExample: "Hello world!",
    name: "Guanjing 24K Pure Gold Collagen 30ml",
    color: "pink",
    sku: 6,
    date: new Date("December 10, 1815").toISOString(),
    images: [
      "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml-04.webp",
      "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml-02.webp",
      "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml-03.webp",
      "/images/productsImages/Guanjing-24K-Pure-Gold-Collagen-30ml.webp",
    ],
    nullExample: null,
    objectExample: {
      a: 5,
      b: {
        nested: "foo",
      },
    },

    breadcrumbs: [
      { id: 1, name: "Skincare", href: "#" },
      { id: 2, name: "24K Pure Gold Collagen", href: "#" },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],

    description: `The Basic Tee 6-Pack allows you to fully express your vibrant personality with 
      three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? 
      Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.`,
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details: `The 6-Pack includes two black, two white, and two heather gray Basic Tees.
       Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.`,
  };

  const UploadDoc = async () => {
    await setDoc(doc(db, "products", docData.name), docData);

    alert("document was succefully uploaded to the database in firebase");
  };

  return (
    <div className="grid grid-cols-7 h-screen">
      <div className="col-span-2 bg-slate-900 text-white p-5">
        <div
          className="rounded-md py-1 px-4 bg-slate-300 text-black cursor-pointer hover:scale-95 transition-all 
        duration-150"
          onClick={UploadDoc}
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
