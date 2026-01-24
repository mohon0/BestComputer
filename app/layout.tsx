import Footer from "@/components/layout/footer";
import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Love_Ya_Like_A_Sister,
  Noto_Sans_Bengali,
} from "next/font/google";
import "./globals.css";

// Standard Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Your Brand Fonts (Matching your Tailwind v4 config)
const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto",
  subsets: ["bengali", "latin"],
  weight: ["400", "700"],
});

const loveYa = Love_Ya_Like_A_Sister({
  variable: "--font-love-ya",
  subsets: ["latin"],
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#1dbb90", // Matches your primary-100
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.training.oylkka.com"),
  title: {
    default: "Oylkka IT & Training Center | স্কিল শিখুন, ক্যারিয়ার গড়ুন",
    template: "%s | Oylkka IT & Training Center",
  },
  description:
    "দেশের অন্যতম সেরা আইটি ট্রেনিং সেন্টার। আমরা দিচ্ছি গ্রাফিক ডিজাইন, ওয়েব ডেভেলপমেন্ট এবং ডিজিটাল মার্কেটিংয়ের প্রফেশনাল কোর্স। আজই আপনার ক্যারিয়ার গড়ার যাত্রা শুরু করুন ওয়ল্কা আইটির সাথে।",
  keywords: [
    "Oylkka IT",
    "Best IT Training Center Bangladesh",
    "Computer Training Jhenaidah", // Specific location boosts local SEO
    "Web Development Course BD",
    "Graphic Design Training",
    "Digital Marketing Course",
    "আইটি ট্রেনিং সেন্টার",
    "কম্পিউটার কোর্স",
    "ফ্রিল্যান্সিং ট্রেনিং",
  ],
  authors: [{ name: "Oylkka IT & Training Center" }],
  creator: "Oylkka IT",
  publisher: "Oylkka IT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // OpenGraph (Optimized for Facebook, LinkedIn, and WhatsApp sharing)
  openGraph: {
    title: "Oylkka IT & Training Center | দক্ষ জনবল গড়ার কারিগর",
    description:
      "প্রফেশনাল মেন্টরদের তত্ত্বাবধানে আইটি স্কিল শিখুন এবং নিজেকে স্বাবলম্বী হিসেবে গড়ে তুলুন। আমাদের কোর্স মডিউলগুলো ইন্ডাস্ট্রি স্ট্যান্ডার্ড অনুযায়ী তৈরি।",
    url: "https://www.training.oylkka.com",
    siteName: "Oylkka IT",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image is 1200x630px in your /public folder
        width: 1200,
        height: 630,
        alt: "Oylkka IT & Training Center - Building Careers in Tech",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "Oylkka IT & Training Center | Grow Your Tech Skills",
    description:
      "Empowering the next generation of IT professionals in Bangladesh with hands-on training.",
    images: ["/og-image.jpg"],
    creator: "@oylkka_it", // Update if you have a Twitter handle
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  // Search Engine Bot Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${notoBengali.variable} 
          ${loveYa.variable} 
          font-noto antialiased
        `}
      >
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: this is fine
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Oylkka IT & Training Center",
              url: "https://www.training.oylkka.com",
              logo: "https://www.training.oylkka.com/icon.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+880 1989-491248",
                contactType: "Customer Service",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: this is fine
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Oylkka IT & Training Center",
              image: "https://www.training.oylkka.com/og-image.jpg",
              url: "https://www.training.oylkka.com",
              telephone: "+880 1989-491248",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "5th floor, Rofi Tower, Jessore - Jhenaidah Hwy, Jhenaidah",
                addressLocality: "Jhenaidah",
                addressRegion: "Khulna",
                postalCode: "7300",
                addressCountry: "BD",
              },
              priceRange: "৳৳4000 - ৳৳12000",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Saturday",
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
