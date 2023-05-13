import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useRouter } from "next/router";

const SearchComp = () => {
  const productDoc = (id) => doc(db, `/products/${id}`);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot.docs.map((doc) => doc.data());
      setFilteredProducts(products);
    };
    getProducts();
  }, []);

  const handleSearch = () => {
    const filteredProduct = filteredProducts.find((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredProduct) {
      const productName = filteredProduct.name;
      router.push(`/product/${productName}`);
      setSearchQuery(""); // Clear the search input
    } else {
      alert("Product not found");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowSuggestions(true);

    const filteredSuggestions = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    setShowSuggestions(false);
    router.push(`/product/${product.name}`);
    setSearchQuery(""); // Clear the search input
  };

  const handleMouseLeave = () => {
    setShowSuggestions(false);
  };

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  return (
    <div className="relative flex flex-row justify-center items-center col-span-3 md:col-span-2 ml-5 h-full">
      <div className="relative" onMouseLeave={handleMouseLeave}>
        <input
          type="text"
          placeholder="Search products"
          className="bg-gray-100 hover:bg-fuchsia-200 transition-colors duration-200 ease-in-out rounded-2xl pl-10 px-2 py-1 outline-none w-full md:w-full"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <BsSearch
          className="w-4 h-4 text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleSearch}
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="absolute z-50 top-full bg-white border border-gray-300 border-t-0 rounded-b-xl w-full shadow-lg">
            {filteredSuggestions.map((product) => (
              <div
                key={product.id}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(product)}
              >
                {product.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComp;
