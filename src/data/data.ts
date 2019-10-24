import { EquipoData, CalificacionData } from "./types";

export const equipos : EquipoData[] = [
    { id : 1, nombre : "Los compilas"},
    { id : 2, nombre : "Dale U"}
]

export const calificaciones : CalificacionData[] = [
    {id : 1, nombre : "E1", equipoId : 1, nota : 10},
    {id : 2, nombre : "E1", equipoId : 2, nota : 20},
    {id : 3, nombre : "E2", equipoId : 1, nota : 12},
    {id : 4, nombre : "E2", equipoId : 2, nota : 19},
    {id : 5, nombre : "E3", equipoId : 1, nota : 11},
]