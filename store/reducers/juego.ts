import { count } from 'console';
import { Inicital, Carta } from '../interfaces/interfaces'

type Action =
    | { type: 'GET_CARTAS', payload: Carta[] }
    | { type: 'CARTA', payload: Carta }
    | { type: 'START_LOADING', payload: boolean }
    | { type: 'ULTIMA', payload: boolean }
    | { type: 'RESET', payload: boolean }
    | { type: 'ERROR', payload: string };

export const JuegoReducers = (state: Inicital, action: Action) => {
    switch (action.type) {
        case 'GET_CARTAS':
            return {
                ...state,
                mazo: action.payload,
                loading: false
            }
        case 'CARTA':
            return {
                ...state,
                carta: action.payload,
                count: state.count + 1,
                loading: false
            }
        case 'ULTIMA':
            return {
                ...state,
                ultimaCarta: true
            }
        case 'RESET':
            return {
                ...state,
                ultimaCarta: false,
                count: 0
            }
        case 'START_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}