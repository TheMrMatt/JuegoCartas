
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { JuegoContext } from '../store/context/juego'
import styles from '../styles/Home.module.css'


const Home = () => {

  const { traerCarta, loading, mazo } = useContext(JuegoContext)

  const pepito = () => {


    traerCarta()
  }



  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <div className={styles.wrapbutton}>
          <Link href='/configuracion'><button className={styles.partida}>Crear partida</button></Link>
          <Link href='/reglas'><button className={styles.reglas}>Reglas</button></Link>
        </div>

      </main>


    </div>
  )
}

export default Home
