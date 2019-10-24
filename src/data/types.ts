export interface EquipoData
{
    id : number
    nombre : string
}

export interface CalificacionData
{
    id : number
    nombre : string
    equipoId : number
    nota : number
}