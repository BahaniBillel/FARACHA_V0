import React from "react";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import CategoryFilters from "../../components/usables/CategoryFilters";
import Product04 from "../../components/products/Product04";

function Category({ products }) {
  const router = useRouter();

  console.log(products);

  const renderProducts =
    products &&
    products.map((product) => (
      <div key={product.id}>
        <h2 className="text-xs line-clamp-1">{product.name}</h2>
        <Product04
          image={product.productImage}
          fill={true}
          width="44"
          length="44"
        />
      </div>
    ));
  return (
    <div>
      <CategoryFilters data={renderProducts} />
    </div>
  );
}

export default Category;

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => doc.data());
  const paths = products.map((product) => ({
    params: { slug: product.name },
  }));

  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => doc.data());
  const categoryProducts = products.filter(
    (product) => product.category === params.slug
  );

  return {
    props: { products: categoryProducts },
    revalidate: 1,
  };
}
