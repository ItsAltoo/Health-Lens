import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Health Lens",
  description: "Website untuk membantu menjaga kesehatan anda",
  icons: {
    icon: "logo/1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
