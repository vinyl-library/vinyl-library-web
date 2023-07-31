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
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: '#ffffff',
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
