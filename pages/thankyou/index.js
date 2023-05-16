import { useEffect } from "react";
import { useRouter } from "next/router";

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
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-xl mb-8">Your form has been submitted successfully.</p>
      <p className="text-lg">
        You will be redirected to the home page shortly...
      </p>
    </div>
  );
};

export default ThankYouPage;
