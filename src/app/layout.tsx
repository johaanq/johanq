import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://johan-quinones.vercel.app'),
  title: "Johan Quiñones - Full Stack Developer | Portfolio",
  description: "Portfolio de Johan Jorge Quiñones Tintaya - Desarrollador Full Stack especializado en React, Next.js, Spring Boot y Flutter. Estudiante de Ingeniería de Software en UPC.",
  keywords: [
    "Johan Quiñones",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Spring Boot",
    "Flutter",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Desarrollador",
    "Ingeniería de Software",
    "UPC"
  ],
  authors: [{ name: "Johan Jorge Quiñones Tintaya" }],
  creator: "Johan Jorge Quiñones Tintaya",
  publisher: "Johan Jorge Quiñones Tintaya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://johan-quinones.vercel.app',
    title: 'Johan Quiñones - Full Stack Developer',
    description: 'Portfolio de Johan Jorge Quiñones Tintaya - Desarrollador Full Stack especializado en React, Next.js, Spring Boot y Flutter.',
    siteName: 'Johan Quiñones Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Johan Quiñones - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johan Quiñones - Full Stack Developer',
    description: 'Portfolio de Johan Jorge Quiñones Tintaya - Desarrollador Full Stack especializado en React, Next.js, Spring Boot y Flutter.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://johan-quinones.vercel.app',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Johan Jorge Quiñones Tintaya",
              "jobTitle": "Full Stack Developer",
              "description": "Desarrollador Full Stack especializado en React, Next.js, Spring Boot y Flutter",
              "url": "https://johan-quinones.vercel.app",
              "sameAs": [
                "https://github.com/johaanq",
                "https://www.linkedin.com/in/johan-qui%C3%B1ones-tintaya-b0654b2b5"
              ],
              "email": "quinonesjorge83@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lima",
                "addressCountry": "PE"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidad Peruana de Ciencias Aplicadas",
                "abbreviation": "UPC"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Spring Boot",
                "Java",
                "C#",
                "Python",
                "Flutter",
                "MySQL",
                "MongoDB",
                "Git"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-[#0D0D0D] transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
