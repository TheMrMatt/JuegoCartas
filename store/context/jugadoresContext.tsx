import axios from "axios";
import { createContext, useReducer } from "react";
import { JugadoresReducers } from "../reducers/jugadoresReducers";
import { InicialJugadores, Jugador } from '../interfaces/interfaces'


const initialState: InicialJugadores = {
    jugadores: [],
    ganador: { alias: '', puntos: 0 },
    turno: { alias: '', puntos: 0 },
    crear: () => { },
    setGanador: () => { },
    rotacion: () => { },
    resetJ: () => { }
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const JugadoresContext = createContext<InicialJugadores>(initialState)

export const JugadoresProvider = ({ children }: props) => {
    const [state, dispatch] = useReducer(JugadoresReducers, initialState)

    function crear(jugadores: Jugador[]) {
        dispatch({
            type: 'CREATE',
            payload: jugadores
        })
    }

    function setGanador(jugadores: Jugador[]) {
        var al = jugadores.length;
        var maximum = jugadores[al - 1];
        while (al--) {
            if (jugadores[al].puntos > maximum.puntos) {
                maximum = jugadores[al]
            }
        }

        dispatch({
            type: 'GANADOR',
            payload: maximum
        })
    }

    function rotacion(jugadores: Jugador[]) {

        var exprimero: Jugador = jugadores.shift()
        jugadores.push(exprimero)
        console.log(jugadores, exprimero);
        dispatch({
            type: 'SIGUIENTE',
            payload: jugadores[0]
        })
    }

    function resetJ() {
        dispatch({
            type: 'RESETJ',
            payload: true
        })
    }

    return (
        <JugadoresContext.Provider
            value={{
                jugadores: state.jugadores,
                ganador: state.ganador,
                turno: state.turno,
                crear,
                setGanador,
                rotacion,
                resetJ
            }}
        >
            {children}
        </JugadoresContext.Provider>
    )
}