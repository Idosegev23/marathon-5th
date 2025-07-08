import type { Metadata } from "next";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/700.css";
import "@fontsource/varela-round/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "מרתון אנגלית קיץ GEN-Z - אילנית ליבוביץ שגב",
  description: "מרתון אנגלית לילדים שעולים לכיתה ז׳. 6 מפגשים ממוקדים, 5 ילדים בקבוצה. הכנה מושלמת לכיתה ז׳ באנגלית.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased font-heebo">
        {children}
      </body>
    </html>
  );
} 