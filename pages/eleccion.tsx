
import styles from '../styles/Eleccion.module.css'
import Link from 'next/link'
import { useContext, useState } from 'react';
import { JugadoresContext } from '../store/context/jugadoresContext';
import { JuegoContext } from '../store/context/juego';

const Eleccion = () => {

    const { jugadores, setGanador, rotacion } = useContext(JugadoresContext)
    const { mazo, ultimaRonda, sacarCarta, startLoading, ultimaCarta } = useContext(JuegoContext)
    const [ganador, setGandor] = useState('');
    const [habilitar, setHabilitar] = useState(true);

    const ultima = () => {
        if (mazo.length <= 5) {
            return ultimaRonda();
        } else {
            jugadores.map(jugador => { if (jugador.alias === ganador) { jugador.puntos = jugador.puntos + 1 } })
            rotacion(jugadores)
            startLoading()
            sacarCarta();
        }
    }

    const handlerClick = (jugador: string) => {
        console.log(jugador);

        setHabilitar(false)
        setGandor(jugador)
    }


    const terminar = () => {


        setGanador(jugadores);
    }

    return <div className={styles.container}>
        <div className={styles.titulo}>
            Quien gano la carta?
        </div>
        <div className={styles.jugadores}>
            {
                jugadores.map(jugador => <button key={jugador.alias} className={styles.jugador} onClick={() => handlerClick(jugador.alias)}>{jugador.alias}</button>)
            }
        </div>
        {
            ultimaCarta ? <button className={styles.button} onClick={() => terminar()}><Link href='/ganador'>Terminar</Link></button> : <button className={styles.button} onClick={() => ultima()} disabled={habilitar}>{habilitar ? <div>Continuar</div> : <Link href='/partida' >Continuar</Link>}</button>
        }

    </div>;
};

export default Eleccion;
