import React from "react";

function Checkout() {
  return (
    <div className="  flex  flex-col md:grid grid-cols-2  max-h-full w-full px-3 md:px-16 font-sans bg-fuchsia-100">
      <section className="flex flex-col items-center justify-center mt-10 py-10 col-span-1 order-2">
        <form className="  rounded-md md:shadow-md  flex flex-col space-y-3 items-start bg-white px-3 py-5">
          <h1 className="text-xl md:text-2xl text-darkGray font-semibold py-4">
            Enter your delivery address
          </h1>
          <div className="flex flex-col items-start space-y-1 w-full">
            <label for="fullname" className=" ">
              Nom Complet
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Ecrir votre nom et prenom ici..."
              className="py-2 px-2 w-full rounded-sm border border-solid  focus:bg-gray-50 shadow-sm "
              required
            />
          </div>
          <div className="flex flex-row items-center space-x-3 w-full">
            <div className="w-1/2">
              <label for="Street adresse" className=" ">
                Wilaya
              </label>
              <input
                type="text"
                id="Street adresse"
                className="py-2 px-2 w-full rounded-sm border border-solid  focus:bg-gray-50 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-grow"></div>
            <div className="w-1/2">
              <label for="Flat/other" className="">
                Commune
              </label>
              <input
                type="text"
                id="Flat/other"
                className="py-2 px-2 w-full rounded-sm border border-solid  focus:bg-gray-50 shadow-sm"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-1 w-full">
            <label for="wilaya" className="">
              Address
            </label>
            <input
              type="text"
              id="wilaya"
              className="py-2 px-2 w-full rounded-sm border border-solid  focus:bg-gray-50 shadow-sm "
              required
            />
          </div>

          <div className="flex flex-row items-center space-x-3 w-full">
            <div className="w-1/2">
              <label for="City" className=" ">
                Numéro mobile
              </label>
              <input
                type="text"
                id="City"
                className="py-2 px-2 w-full rounded-sm border border-solid  focus:bg-gray-50 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-grow"></div>
            <div className="w-1/2">
              <label for="County" className=" ">
                County
              </label>
              <input
                type="text"
                id="County"
                className="py-2 px-2 w-full rounded-sm border border-solid  focus:bg-gray-50 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-grow"></div>
            <div className="w-1/2">
              <label for="Postal Code" className="">
                Postal code
              </label>
              <input
                type="text"
                id="Postal Code"
                className="py-2 px-2 w-full rounded-sm border border-solid  outline-black shadow-sm"
                required
              />
            </div>
          </div>

          <div className="flex flex-grow"></div>
          <button
            className=" w-full py-3 text-white font-semibold bg-slate-900 
          text-xl hover:scale-95 transition-all ease-in-out duration-150"
          >
            Confirmer la commande
          </button>
        </form>
      </section>
      <section className="col-span-1 order-1"></section>
    </div>
  );
}

export default Checkout;
