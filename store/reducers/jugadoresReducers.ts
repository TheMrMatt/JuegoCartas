import { InicialJugadores, Jugador } from '../interfaces/interfaces'

type Action =
    | { type: 'CREATE', payload: Jugador[] }
    | { type: 'GANADOR', payload: Jugador }
    | { type: 'TABLE', payload: Jugador[] }
    | { type: 'SIGUIENTE', payload: Jugador }
    | { type: 'RESETJ', payload: boolean }
    | { type: 'ERROR', payload: string };

export const JugadoresReducers = (state: InicialJugadores, action: Action) => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                jugadores: action.payload,
                turno: action.payload[0],
                loading: false
            }
        case 'TABLE':
            return {
                ...state,
                tabla: action.payload,
                loading: false
            }
        case 'GANADOR':
            return {
                ...state,
                ganador: action.payload
            }
        case 'SIGUIENTE':
            return {
                ...state,
                turno: action.payload
            }
        case 'RESETJ':
            return {
                ...state,
                ganador: { alias: '', puntos: 0 },
                turno: { alias: '', puntos: 0 },
                jugadores: []
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