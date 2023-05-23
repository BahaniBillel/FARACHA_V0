import { Inter, Baloo_Bhaijaan_2 } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const balooBhaijaan2 = Baloo_Bhaijaan_2({
  subsets: ["arabic"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={balooBhaijaan2.className}>
      <body>{children}</body>
    </html>
  );
}
