import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/basketSlice";
import { toast, ToastContainer } from "react-toastify";
import Product04 from "../../components/products/Product04";
import Link from "next/link";

function Listing({ product, products }) {
  // Dispatching product to store
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [stock, setStock] = useState();

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // ...

  const addItemToBasket = async (product) => {
    const productData = {
      ...product,
      quantity: 1, // Set the initial quantity to 1
    };

    // Retrieve the stock quantity from Firestore
    const productRef = doc(db, "products", product.name); // Use product.name as the document ID
    const productSnapshot = await getDoc(productRef);
    const stockQuantity = productSnapshot.data().sku; // Assuming the stock quantity field is named 'sku'

    // To enable the span under button when the stock is out
    setStock(stockQuantity);
    console.log(stockQuantity);

    // Check if the stock quantity allows for adding the item to the basket
    if (stockQuantity > 0) {
      // Check if adding the item would exceed the stock quantity limit
      if (stockQuantity - 1 > 0) {
        // Dispatch the product to the store
        dispatch(addToBasket(productData));

        // Disable the button if the quantity limit is reached
        if (stockQuantity === 0) {
          setIsButtonDisabled(true);
        }

        // Notify the user
        notify(product.name);
      } else {
        console.log("Product is out of stock");
        // Show an error message or handle out-of-stock scenario
      }
    } else {
      console.log("Product is out of stock");
      // Show an error message or handle out-of-stock scenario
    }
  };

  // ...

  // Notifying the dispatched product
  const notify = (productName) => {
    toast(`${productName} was added to basket`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar text-xs font-light",
    });
  };

  const {
    name,
    images,
    breadcrumbs,
    description,
    productImage,
    category,
    exPrice,
    features,
    label,
    notes,
    orders,
    price,
    reviews,
    sku,
    subtitle,
    usage,
  } = product;

  // similar products
  const similarProducts = [product.category]; // Similar array to filter by

  const filteredArray = products.filter((item) =>
    item.similar.some((category) => similarProducts.includes(category))
  );

  console.log(filteredArray);
  return (
    <div className="pt-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-xs whitespace-pre font-medium text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={product.href}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600  line-clamp-1"
            >
              {name}
            </a>
          </li>
        </ol>
      </nav>

      {/* Images Gallery */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <Image
            src={images[0]}
            alt={images[0]}
            fill={true}
            placeholder={images[0]}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <Image
              src={images[1]}
              alt={images[1]}
              fill={true}
              placeholder={images[1]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <Image
              src={images[2]}
              alt={images[2]}
              fill={true}
              placeholder={images[2]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <Image
            src={images[3]}
            alt={images[3]}
            fill={true}
            placeholder={images[3]}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <p className="px-3 py-1 bg-black text-white w-16 text-center">
            {label}
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {name}
          </h1>
        </div>

        {/* Product */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>

          {product.exPrice.toString() ? (
            <p className="text-lg tracking-tight text-gray-400 line-through font-light">
              Prix {exPrice} DA
            </p>
          ) : null}
          <p className="text-2xl tracking-tight text-gray-900">
            Prix {price} DA
            <span className="text-xl"> seulement.</span>
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a
                href={reviews.href}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          <button
            className={`mt-10 flex w-full items-center justify-center 
            rounded-md border border-transparent bg-slate-900 px-8 py-3 text-base
             font-medium text-white hover:bg-fuchsia-600 focus:outline-none focus:ring-2
              focus:ring-fuchsia-500 focus:ring-offset-2 cursor-pointer ? ${
                isButtonDisabled ? "disabled:bg-slate-400" : null
              } `}
            onClick={() => addItemToBasket(product)}
            disabled={isButtonDisabled} // Set the disabled attribute based on the state
          >
            Ajouter au Panier
          </button>
          {stock === 0 ? (
            <span className="text-sm text-yellow-200  bg-black font-bold">
              Produit en rupture de stock, il sera bientôt réapprovisionné.
              Veuillez vérifier dans 2 jours
            </span>
          ) : null}
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
          {/* Carateristiques */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">
              Caractéristiques
            </h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {features.map((feature) => (
                  <li key={feature} className="text-gray-400">
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Usage */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Utilisation:</h3>

            <div className="mt-4">
              <ol
                role="list"
                className="list-disc space-y-2 pl-4 text-sm"
                type="1"
              >
                {usage.map((use) => (
                  <li key={use} className="text-gray-400">
                    <span className="text-gray-600">{use}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* notes */}
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Notes:</h3>

            <div className="mt-4">
              <ol
                role="list"
                className="list-disc space-y-2 pl-4 text-sm"
                type="1"
              >
                {notes.map((note) => (
                  <li key={note} className="text-gray-400">
                    <span className="text-gray-600">{note}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* similar products */}
      <div className="w-full bg-amber-200 py-5 px-2 md:px-16 font-semibold">
        <h2 className="text-2xl mb-4">Produits Similaires :</h2>
        <div className="  grid grid-cols-2 gap-5 md:grid-cols-5 grid-flow-row">
          {filteredArray.map(({ id, productImage, title, name }) => (
            <Link href={`/listing/${name}`} key={id}>
              <Product04
                image={productImage}
                title={title}
                fill={true}
                length="h-48"
                width="w-36"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const reviews = { href: "#", average: 4, totalCount: 117 };
export async function getStaticPaths() {
  // Fetching product slugs for dynamic routing
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
  const productRef = doc(db, "products", params.slug);
  const productSnapshot = await getDoc(productRef);
  console.log(params.slug);

  if (!productSnapshot.exists()) {
    return {
      notFound: true,
    };
  }

  const product = productSnapshot.data();
  // getting reference to products collection
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => doc.data());

  return {
    props: { product, products },
    revalidate: 1, // optional, allows for incremental static regeneration
  };
}

export default Listing;
