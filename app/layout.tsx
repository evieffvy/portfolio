import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ChatWidget } from "@/components/ChatWidget";
import { BlackCat } from "@/components/BlackCat";
import { ClickCat } from "@/components/ClickCat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evieffvy.vercel.app"),
  title: "Evie · Computer Engineering @ Assumption University",
  description:
    "Computer Engineering student building AI systems with security at the core. Creator of NYXUS — a full-stack RAG chatbot with prompt-injection defense, PII redaction, and OWASP code scanning.",
  openGraph: {
    title: "Evie — AI Engineering & Cybersecurity",
    description:
      "CompEng student @ ABAC. Builder of full-stack AI systems with security-first design.",
    url: "https://evieffvy.vercel.app",
    type: "website",
  },
  alternates: {
    canonical: "https://evieffvy.vercel.app",
  },
};

const noFlashScript = `
(function(){try{
  var t = localStorage.getItem('evie-theme');
  if(!t){t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';}
  document.documentElement.setAttribute('data-theme', t);
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="theme-anim min-h-full font-sans">
        <ThemeProvider>
          {children}
          <ChatWidget />
          <BlackCat />
          <ClickCat />
        </ThemeProvider>
      </body>
    </html>
  );
}
