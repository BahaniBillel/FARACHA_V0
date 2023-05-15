import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/usables/checkoutProduct";

import { selectItems, selectTotal } from "../../redux/slices/basketSlice";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Cart() {
  // const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);

  console.log(items.length);

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white mb-10">
      <div className=" px-2 md:px-24 mt-10  flex flex-col md:flex-row items-start flex-nowrap md:space-x-5">
        <div className="md:w-9/12 order-2 md:order-1">
          <p className="font-semibold text-lg p-2 rounded-sm bg-white">
            Panier :
          </p>
          {items?.map((item, i) => (
            <CheckoutProduct
              key={i}
              name={item.name}
              productImage={item.productImage}
              description={item.description}
              price={item.price}
              category={item.category}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="md:w-3/12 bg-white rounded-sm p-3 shadow-sm order-1 md:order-2">
          <p className="py-1 font-semibold text-sm uppercase">Total Panier</p>
          <div className="flex flex-rox space-x-3 py-5 border-t-[1px] border-solid border-lightGray">
            <p>Sous-total ({items.length}) :</p>
            <div className="flex flex-grow"></div>
            <p className="font-semibold text-lg">
              {" "}
              {items.length ? total : 0} DA
            </p>
          </div>
          <p className="text-darkGray text-xs pb-2 border-b-[1px] border-solid border-lightGray ">
            Delivery fees are not included at this stage.
          </p>

          <div className="py-5  rounded-sm shadow-md mt-2 p-2">
            <p className="text-xs text-greenPrimary p-1 bg-lightEmerald  font-semibold   ">
              Delivery is free to Blida City.
            </p>
            <p className="text-xs py-3 font-semibold uppercase tracking-wider flex flex-row">
              Faracha
              <span className="text-greenPrimary italic uppercase flex flex-row">
                <RocketLaunchIcon className="h-4" />
                Express
              </span>
            </p>
            <p className="text-xs text-darkGray mb-4">
              TAAJ Express items are eligible for free delivery to a pick-up
              point in Algiers.
            </p>
            <Link href="/checkout">
              <div
                className="border-t-[1px] border-solid border-lightGray bg-slate-900 text-white text-center cursor-pointer
             px-3 py-2 rounded-md hover:scale-95 transition-all duration-150 hover:shadow-md"
              >
                BUY
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
