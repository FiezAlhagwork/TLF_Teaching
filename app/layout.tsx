import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'الإنجليزية مع آلان - إنجليزية بلا حدود',
  description: 'تعلم الإنجليزية بلا حدود. احصل على خصم لمدة 3 أشهر من التعلم مع معلمينا الخبراء.',
  generator: 'Fiez Alhag',
  icons: {
    icon: [
      {
        url: '../images//logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '../images//logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '../images/logo.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
