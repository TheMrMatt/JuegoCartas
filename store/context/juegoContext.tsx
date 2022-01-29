import { createContext } from "react";
import { Inicital } from '../interfaces/interfaces'

export type JuegoContextProps = {
    juegoState: Inicital;
    TraerCartas: () => void;
}

export const JuegoContext = createContext<JuegoContextProps>({} as JuegoContextProps)