import { useEffect } from "react";
import { useRouter } from "next/router";
import Bg from "../../public/images/thankyou.jpg";
import Logo from "../../public/images/logo.png";
import Image from "next/image";

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src={Bg} alt="/" fill />
      <div className="z-50 bg-white  p-5 w-96 h-96 ">
        <div className="border-2 border-dashed border-black p-5 w-full h-full text-center flex flex-col items-center justify-center">
          <Image src={Logo} alt="/" width={150} height={150} className="mb-5" />
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl mb-8">
            Votre commande a été soumise avec succès.
          </p>
          <p className="text-lg">
            Vous serez redirigé(e) vers la page d'accueil dans un instant...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
