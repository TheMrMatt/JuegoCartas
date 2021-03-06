
import styles from '../styles/Partida.module.css'
import Link from 'next/link'
import { useContext } from 'react';
import { JuegoContext } from '../store/context/juego';
import { JugadoresContext } from '../store/context/jugadoresContext';
import { IoSkull } from "react-icons/io5";


const Partida = () => {

    const { carta, mazo, loading, ultimaCarta, count, reset } = useContext(JuegoContext)
    const { jugadores, setGanador, turno, resetJ } = useContext(JugadoresContext)
    console.log('turno: ', turno.alias);

    const handlerClick = () => {
        setGanador(jugadores)
        reset();
        resetJ();
    }

    if (loading) {
        return <div>loading</div>
    }
    return <div className={styles.container}>
        <div className={styles.col1}>
            <div className={styles.bwrapp}>
                <Link href='/ganador'><button className={styles.button} onClick={() => handlerClick()}>Terminar</button></Link>
            </div>
        </div>
        <div className={styles.col2}>
            <div className={styles.jugador}>
                Lee: {turno.alias}
            </div>
            <div className={styles.cartacontainer}>
                <div className={styles.carta}>
                    <div className={styles.pregunta}>
                        {
                            carta.pregunta
                        }
                    </div>
                    <div className={styles.pie}>
                        <IoSkull />
                        {count}
                    </div>
                </div>

            </div>
            <div className={styles.bwrapp}>
                <Link href='/eleccion'><button className={styles.button}>Continuar</button></Link>
            </div>
        </div>
        <div className={styles.col3}>
            <div className={styles.puntaje}>
                Puntajes
            </div>
            <table className={styles.tabla}>
                <tbody>

                    {
                        jugadores.map(jugador => <tr key={jugador.alias} className={styles.trow}>
                            <th className={styles.player}>
                                {jugador.alias}
                            </th>
                            <th>
                                {jugador.puntos}
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
        <div className={styles.col4}>
            <div className={styles.bwrapp}>
                <Link href='/ganador'><button className={styles.button} onClick={() => handlerClick()}>Terminar</button></Link>
            </div>
        </div>
    </div>;
};

export default Partida;
