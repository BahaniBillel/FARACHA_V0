import React, { useEffect } from "react";
import { selectItems, selectTotal } from "../../redux/slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/usables/checkoutProduct";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

function Checkout() {
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);
  const [delivery, setDelivery] = React.useState(0);

  const wilayaDeliveryPrice = [
    {
      id: 1,
      name: "01-Algers",
      price: 0,
    },
    {
      id: 2,
      name: "02-Chlef",
      price: 800,
    },
    {
      id: 9,
      name: "09-Blida",
      price: 1000,
    },
  ];

  const condition = total ? delivery : 0;
  const HandleOrder = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "orders", "client B"), {
      name: "hi",
    });
  };

  return (
    <div className="px-3 md:px-10 py-5">
      <p className="font-bold text-xl ">Checkout Form</p>
      <div className="  flex  flex-col md:grid grid-cols-2  max-h-full w-full p-3 md:p-5 font-sans  border rounded-md bg-slate-100">
        <section className="flex flex-col items-center justify-center  py-5 col-span-1 order-1 w-full ">
          <form className="    flex flex-col space-y-3 items-start  md:px-10 py-5 w-full ">
            <h1 className="text-xl md:text-2xl text-darkGray font-semibold py-4">
              Enter your delivery address
            </h1>

            {/* fullname */}
            <div className="flex flex-col items-start space-y-1 w-full">
              <label
                for="fullname"
                className=" flex flex-row justify-center items-center whitespace-pre w-full "
              >
                Nom Complet
                <label className="flex flex-grow"></label>
                <label className="">ولاية</label>
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Ecrir votre nom et prenom ici..."
                className="input  w-full  "
                required
              />
            </div>

            {/* wilaya et commune */}
            <div className="flex flex-row items-center space-x-3 w-full">
              <div className="w-1/2">
                <label
                  for="wilaya"
                  className=" flex flex-row justify-center items-center whitespace-pre "
                >
                  Wilaya
                  <label className="flex flex-grow"></label>
                  <label className="">ولاية</label>
                </label>
                <select
                  id="wilaya"
                  name="wilaya"
                  className="input w-full"
                  required
                  onChange={(e) => setDelivery(e.target.value)}
                >
                  {wilayaDeliveryPrice.map((wilaya) => {
                    return (
                      <option key={wilaya.id} value={wilaya.price}>
                        {wilaya.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-grow"></div>
              <div className="w-1/2">
                <label
                  for="commune"
                  className=" flex flex-row justify-center items-center whitespace-pre "
                >
                  Commune
                  <label className="flex flex-grow"></label>
                  <label className="">البلدية</label>
                </label>
                <input
                  type="text"
                  id="commune"
                  className="input w-full "
                  required
                />
              </div>
            </div>

            {/* address */}
            <div className="flex flex-col items-start space-y-1 w-full">
              <label
                for="address"
                className=" flex flex-row justify-center items-center whitespace-pre w-full "
              >
                Adresse
                <label className="flex flex-grow"></label>
                <label className="">العنوان</label>
              </label>
              <input
                type="text"
                id="address"
                className=" input  w-full  "
                required
              />
            </div>
            {/* email */}
            <div className="flex flex-row items-center space-x-3 w-full">
              <div className="w-full">
                <label
                  for="email"
                  className=" flex flex-row justify-center items-center whitespace-pre "
                >
                  Votre email
                  <label className="flex flex-grow"></label>
                  <label className="">البريد الإلكلتروني </label>
                </label>
                <input type="text" id="email" className="input  w-full " />
              </div>
            </div>
            {/* Mobile number */}
            <div className="flex flex-row items-center space-x-3 w-full">
              <div className="w-4/6">
                <label
                  for="mobile"
                  className=" flex flex-row justify-center items-center whitespace-pre "
                >
                  Numéro Telephone
                  <label className="flex flex-grow"></label>
                  <label className="">رقم الهاتف</label>
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="input  w-full "
                  required
                />
              </div>
            </div>

            {/* Extra info */}
            <div className="flex flex-row items-center space-x-3 w-full">
              <div className="w-4/6">
                <label
                  for="notes"
                  className=" flex flex-row justify-center items-center whitespace-pre "
                >
                  Autres Informations
                  <label className="flex flex-grow"></label>
                  <label className="">معلومات أخرى </label>
                </label>
                <textarea type="text" id="notes" className="input  w-full " />
              </div>
            </div>

            <div className="flex flex-grow"></div>
            <button
              className=" w-full py-3 text-white font-semibold bg-slate-900 
          text-xl hover:scale-95 transition-all ease-in-out duration-150 rounded-md"
              onClick={HandleOrder}
            >
              Confirmer la commande
            </button>
          </form>
        </section>
        <section className="col-span-1 order-2 bg-white px-5 py-5 rounded-md ">
          <p className="font-bold text-xl py-2">Vous avez Commandé :</p>
          <div>
            {items?.map((item, i) => (
              <CheckoutProduct
                key={i}
                name={item.name}
                productImage={item.productImage}
                price={item.price}
                category={item.category}
                quantity={item.quantity}
                isCheckout={true}
              />
            ))}
          </div>

          <div className="my-5 pt-5 border-t flex flex-col flex-nowrap space-y-5">
            <div className="flex flex-row flex-nowrap items-center w-full ">
              <p>Sous-Total</p>
              <p className="flex flex-grow"></p>
              <p>{total}</p>
            </div>
            <div className="flex flex-row flex-nowrap items-center w-full ">
              <p>Livraison</p>
              <p className="flex flex-grow"></p>
              <p>{condition}</p>
            </div>

            <div className=" font-bold border-t pt-3 flex flex-row flex-nowrap items-center w-full ">
              <p>Total </p>
              <p className="flex flex-grow"></p>
              <p>{Number(total) + Number(condition)}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Checkout;
