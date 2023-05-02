import React from "react";
import { useRouter } from "next/router";

// Firebase
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Components
import ProductOverviewOne from "../../components/productOverview/productOverviewOne";

function ProductDetail({ page }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);
  // Check if the category array exists and has at least one element
  if (!page.category || page.category.length === 0) {
    return <div>Page not found1</div>;
  }

  // Compare the URL request with the first element of the category array
  if (slug !== page.name) {
    return <div>Page not found2</div>;
  }

  return (
    <div>
      <p className="text-2xl">{page.name}</p>
      <ProductOverviewOne />
    </div>
  );
}

export default ProductDetail;

async function getData() {
  // Fetching data from firestore
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return products;
}

export async function getServerSideProps(context) {
  const products = await getData();

  // searching for the page id in the firestore database
  const { params, req, res } = context;
  // url request
  const id = params.slug;
  // firestore database
  const page = products.find((x) => x.name === id);

  if (!page) return { notFound: true };
  console.log(page);
  return {
    props: { page },
  };
}
