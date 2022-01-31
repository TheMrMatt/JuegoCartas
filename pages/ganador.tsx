
import styles from '../styles/Ganador.module.css'
import Link from 'next/link'
import { useContext } from 'react';
import { JugadoresContext } from '../store/context/jugadoresContext';
import { JuegoContext } from '../store/context/juego';

const Ganador = () => {
    const { ganador, resetJ } = useContext(JugadoresContext)
    const { reset } = useContext(JuegoContext)

    const handlerClick = () => {
        reset()
        resetJ()
    }

    return <div className={styles.container}>
        <div className={styles.titulo}>
            El ganador es:
        </div>
        <div className={styles.ganador}>
            {
                ganador.alias
            }
        </div>
        <Link href='/'><button className={styles.button}>Continuar</button></Link>
    </div>;
};

export default Ganador;
