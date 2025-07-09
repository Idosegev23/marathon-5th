import type { Metadata } from "next";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/700.css";
import "@fontsource/varela-round/400.css";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "מרתון אנגלית קיץ GEN-Z - אילנית ליבוביץ שגב",
  description: "מרתון אנגלית לילדים שעולים לכיתה ז׳. 6 מפגשים ממוקדים, 5 ילדים בקבוצה. הכנה מושלמת לכיתה ז׳ באנגלית.",
  other: {
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <Analytics />
        <script dangerouslySetInnerHTML={{
          __html: `
            // מניעת גלילה צידית ותיקוני מובייל
            document.documentElement.style.overflowX = 'hidden';
            document.body.style.overflowX = 'hidden';
            
            // מניעת אנימציות במובייל
            function isMobile() {
              return window.innerWidth <= 768;
            }
            
            if (isMobile()) {
              // השבתת כל האנימציות במובייל - גרסה מחמירה
              const style = document.createElement('style');
              style.textContent = \`
                *, *::before, *::after {
                  animation-duration: 0s !important;
                  transition-duration: 0s !important;
                  animation-delay: 0s !important;
                  transition-delay: 0s !important;
                  animation: none !important;
                  transition: none !important;
                  transform: none !important;
                  opacity: 1 !important;
                  will-change: auto !important;
                }
                
                /* השבתת framer motion במובייל */
                [data-framer-motion],
                [data-framer-motion] * {
                  animation: none !important;
                  transition: none !important;
                  transform: none !important;
                  opacity: 1 !important;
                }
              \`;
              document.head.appendChild(style);
            }
            
            // מניעת קפיצות בגלילה
            let ticking = false;
            function updateScrolling() {
              document.body.classList.add('scrolling');
              if (!ticking) {
                requestAnimationFrame(function() {
                  document.body.classList.remove('scrolling');
                  ticking = false;
                });
                ticking = true;
              }
            }
            
            window.addEventListener('scroll', updateScrolling, { passive: true });
          `
        }} />
      </body>
    </html>
  );
} 