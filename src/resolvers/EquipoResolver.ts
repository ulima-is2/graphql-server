
import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import {EquipoData, CalificacionData} from "../data/types"
import Equipo from "../schemas/Equipo"
import { equipos, calificaciones } from "../data/data";

@Resolver(of => Equipo)
export default class EquipoResolver
{
    @Query(returns => Equipo, {nullable : true})
    equipoPorNombre(@Arg("nombre") name : string) : EquipoData | undefined
    {
        // Codigo para obtener los datos
        return equipos.find(equipo => {
            return equipo.nombre === name
        })
    }

    @Query(returns => [Equipo], {nullable : true})
    getEquipos() : EquipoData[] | undefined
    {
        return equipos
    }

    @FieldResolver()
    calificaciones(@Root() equipoData : EquipoData)
    {
        return calificaciones.filter( calif => {
            return calif.equipoId == equipoData.id
        })
    }
}