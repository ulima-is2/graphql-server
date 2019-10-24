
import {Resolver, Query, Arg, FieldResolver, Root, Mutation, Args } from "type-graphql"
import {CalificacionData} from "../data/types"
import Calificacion from "../schemas/Calificacion"
import { calificaciones, equipos } from "../data/data"

@Resolver(of => Calificacion)
export default class CalificacionResolver
{
    @Query(returns => [Calificacion], {nullable : true})
    getCalificacionesByNombre(@Arg("nombreCalificacion") nombreCalificacion : string) : CalificacionData[] | undefined
    {
        // Obtenemos las calificaciones por nombre de calificacion
        return calificaciones.filter(calif => {
            return calif.nombre == nombreCalificacion
        })
    }

    @Mutation(returns => Calificacion)
    ponerNota(@Arg("calificacionId") calificacionId : number, @Arg("nota") nota : number) : CalificacionData
    {
        const calificacion = calificaciones.find(calif => {
            return calif.id == calificacionId
        })

        // Validamos que no se encuentre una calificacion
        if (!calificacion)
        {
            throw new Error(`No se pudo encontrar una calificacion con el id: ${calificacionId}`)
        }

        calificacion.nota = nota

        return calificacion
    }

    @FieldResolver()
    equipo(@Root() calificacionData : CalificacionData)
    {
        // Obtenemos el equipo que se tenia definido
        return equipos.find(equipo => equipo.id == calificacionData.equipoId)
    }

}