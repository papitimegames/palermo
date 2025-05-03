import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import MusicPlayer from '@/components/music-player'

export const metadata: Metadata = {
  title: 'Hipódromos',
  description: 'Información y predicciones de carreras de caballos',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <MusicPlayer />
        </ThemeProvider>
      </body>
    </html>
  )
}
