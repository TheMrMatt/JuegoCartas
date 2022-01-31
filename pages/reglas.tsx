import Link from 'next/link'
import styles from '../styles/Reglas.module.css'


const Reglas = () => {
    return (
        <div className={styles.container}>

            <div className={styles.texto}>¿Cómo se juega amigos de mierda?</div>
            <ul className={styles.ul}>
                <li className={styles.li}>Un jugador roba una carta del mazo y lee en voz alta.</li>
                <li className={styles.li}>Todos los jugadores (incluso el que leyó la carta) se toman unos segundos para pensar la respuesta.</li>
                <li className={styles.li}>A la cuenta de 3 todos votan señalando con el dedo al jugador que eligen como respuesta.</li>
                <li className={styles.li}>El jugador con más personas apuntándolo es el "ganador" y suma un punto.</li>
                <li className={styles.li}>El jugador que obtenga mas puntos, sera coronado como Amigo de mierda</li>
            </ul>
            <Link href='/'><button className={styles.button}>volver</button></Link>
        </div>
    )
}

export default Reglas
