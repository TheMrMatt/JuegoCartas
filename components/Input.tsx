import styles from '../styles/Input.module.css'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { Jugador } from '../store/interfaces/interfaces'
import React, { ChangeEvent } from 'react'
import { JugadoresContext } from '../store/context/jugadoresContext'
import { JuegoContext } from '../store/context/juego'

const Input = () => {
    const [jugadores, setJugadores] = useState<Jugador[]>([])
    const [value, setValue] = useState('')
    const { crear } = useContext(JugadoresContext)
    const { sacarCarta, mazo, startLoading } = useContext(JuegoContext)

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }
    const ver = () => {
        console.log(value);
        console.log(jugadores);

    }

    const agregar = (jugador: Jugador) => {
        if (!jugador) {
            return alert('error')
        } else {
            setValue('')
            setJugadores([...jugadores, jugador]);
        }

    }

    const continuar = () => {
        startLoading()
        sacarCarta()
        crear(jugadores)
    }

    console.log(mazo.length);

    return (
        <div className={styles.container}>

            <input name="agregar" id='agregar' placeholder="Agrega un participante" type="text" className={styles.inputC} value={value} onChange={onChange} />
            <button className={styles.button} onClick={() => agregar({ alias: value, puntos: 0 })}>agregar</button>
            <label>Participantes</label>
            <div className={styles.participantes}>
                {
                    jugadores.map(jugador => <div key={jugador.alias}>{jugador.alias}</div>)
                }
            </div>
            <Link href='/partida'><button className={styles.button} onClick={() => continuar()}>Continuar</button></Link>

        </div>
    )
}

export default Input
