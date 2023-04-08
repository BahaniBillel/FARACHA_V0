import { useRouter } from "next/router";
import React from "react";
import ProductOverviewOne from "../../components/productOverview/productOverviewOne";

function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <div>
      <ProductOverviewOne />
    </div>
  );
}

export default ProductDetail;
