import "./globals.css"
import { Sora } from "next/font/google"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export const metadata = {
  title: "My Portfolio",
  description: "Cool portfolio with Sora font",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <body>{children}</body>
    </html>
  )
}
