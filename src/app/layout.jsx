import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Clon de twitter',
  description: 'Generado moviendo las manitas'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
