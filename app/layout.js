import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata = {
  title: "Certified Dietician & Health Coach | Genuine Transformations",
  description: "Personalized nutrition plans for weight loss, weight gain, diabetes management, and PCOS. Sustainable results using Indian diet & lifestyle.",
  keywords: ["dietician", "weight loss", "PCOS diet", "diabetes management", "nutritionist", "health coach", "Indian diet plan",    "dietician for weight loss",
    "best nutritionist in India",
    "weight loss diet plan",
    "diabetes diet plan",
    "online diet consultation",
    "fat loss without gym",
    "PCOS diet plan",
    "healthy eating plan India","dietician in Hyderabad",
    "weight loss diet Hyderabad",
    "nutritionist Bangalore",
    "dietician Nizamabad",
    "diet plan Adilabad",
    "online dietician Armoor",
    "PCOS diet Hyderabad",
    "diabetes diet plan India"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Certified Dietician & Health Coach",
    description: "Personalized nutrition plans for weight loss, medical conditions, and sustainable results.",
    url: "https://nutribalance.com",
    siteName: "NutriBalance",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome for Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
