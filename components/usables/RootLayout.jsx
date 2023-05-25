import { Noto_Kufi_Arabic } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const Noto_Kufi_Arabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className={Noto_Kufi_Arabic.className}>
      <body>{children}</body>
    </html>
  );
}
