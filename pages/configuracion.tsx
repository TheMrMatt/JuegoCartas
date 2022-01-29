import Input from '../components/Input'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { JugadoresContext } from '../store/context/jugadoresContext'
import { JuegoContext } from '../store/context/juego'

const configuracion: NextPage = () => {
    const { traerCarta } = useContext(JuegoContext)

    useEffect(() => {
        traerCarta()
    }, [])

    return (
        <div className={styles.container}>
            <Input />
        </div>
    )
}

export default configuracion
