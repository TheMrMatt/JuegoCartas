export interface Inicital {
    ultimaCarta: boolean;
    mazo: Carta[];
    carta: Carta;
    loading: boolean;
    count: number;
    traerCarta: () => void;
    sacarCarta: () => void;
    startLoading: () => void;
    ultimaRonda: () => void;
    reset: () => void;
}

export interface Carta {
    id: string,
    pregunta: string
}

export interface Jugador {
    alias: string;
    puntos: number;
}

export interface InicialJugadores {
    jugadores: Jugador[];
    ganador: Jugador;
    turno: Jugador;
    crear: ([]) => any;
    setGanador: (jugadores: Jugador[]) => any;
    rotacion: (jugadores: Jugador[]) => any;
    resetJ: () => any;
}