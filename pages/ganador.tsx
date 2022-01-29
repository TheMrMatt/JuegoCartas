import type { NextPage } from 'next'
import styles from '../styles/Ganador.module.css'
import Link from 'next/link'
import { useContext } from 'react';
import { JugadoresContext } from '../store/context/jugadoresContext';
import { JuegoContext } from '../store/context/juego';

const ganador: NextPage = () => {
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
        <button className={styles.button}><Link href='/'>Continuar</Link></button>
    </div>;
};

export default ganador;
