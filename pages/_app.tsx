import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav/Nav'
import { JuegoProvider } from '../store/context/juego'
import { JugadoresProvider } from '../store/context/jugadoresContext'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <JuegoProvider>
      <JugadoresProvider>
        <Nav />
        <Component {...pageProps} />
      </JugadoresProvider>
    </JuegoProvider>
  </>
}

export default MyApp
