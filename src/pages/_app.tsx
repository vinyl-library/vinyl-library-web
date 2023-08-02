import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { AuthContextProvider } from '@contexts'
import { LayoutModule } from '@modules'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#46E72B',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '46E72B',
            },
          },
          error: {
            style: {
              background: '#FB5770',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: 'FB5770',
            },
          },
        }}
      />
      <AuthContextProvider>
        <LayoutModule>
          <Component {...pageProps} />
        </LayoutModule>
      </AuthContextProvider>
    </>
  )
}
