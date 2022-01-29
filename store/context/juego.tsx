import axios from "axios";
import { createContext, useCallback, useReducer, useState } from "react";
import { JuegoReducers } from '../reducers/juego';
import { Carta, Inicital } from '../interfaces/interfaces'


const initialState: Inicital = {
    ultimaCarta: false,
    count: 0,
    mazo: [],
    carta: {
        id: '0',
        pregunta: ''
    },
    traerCarta: () => { },
    sacarCarta: () => { },
    startLoading: () => { },
    ultimaRonda: () => { },
    reset: () => { },
    loading: false
}

interface props {
    children: JSX.Element | JSX.Element[]
}

const url = 'https://cartassv.herokuapp.com'

export const JuegoContext = createContext<Inicital>(initialState)


export const JuegoProvider = ({ children }: props) => {
    const [state, dispatch] = useReducer(JuegoReducers, initialState)


    async function traerCarta() {

        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const res = await axios.get(`https://cartassv.herokuapp.com/carta`, config);
            console.log('funciona', res);

            dispatch({
                type: 'GET_CARTAS',
                payload: res.data.data
            })
        } catch (error: any) {
            dispatch({
                type: 'ERROR',
                payload: error
            })
        }
    }

    function sacarCarta() {
        let max = state.mazo.length;
        let min = 0;
        const indice = Math.floor((Math.random() * (max - min + 1)) + min)
        const cart = state.mazo.splice(indice, 5)


        dispatch({
            type: 'CARTA',
            payload: cart[0]
        })
    }

    function ultimaRonda() {
        dispatch({
            type: 'ULTIMA',
            payload: true
        })
    }

    function startLoading() {
        dispatch({
            type: 'START_LOADING',
            payload: true
        })
    }

    function reset() {
        dispatch({
            type: 'RESET',
            payload: true
        })
    }

    return (
        <JuegoContext.Provider
            value={{
                ultimaCarta: state.ultimaCarta,
                loading: state.loading,
                carta: state.carta,
                mazo: state.mazo,
                count: state.count,
                traerCarta,
                sacarCarta,
                startLoading,
                ultimaRonda,
                reset
            }}
        >
            {children}
        </JuegoContext.Provider>
    )
}


/*
    
*/