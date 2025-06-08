import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Twitter Analytics Dashboard",
  description: "A modern dashboard for Twitter analytics with theme switching",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
} 