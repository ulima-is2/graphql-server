// Equipo.ts

import { Field, Int, ObjectType } from "type-graphql";

import Calificacion from "./Calificacion"

@ObjectType()
export default class Equipo
{
    @Field(type => Int)
    id : number

    @Field()
    nombre : string

    @Field(type => [Calificacion])
    calificaciones : Calificacion[]
}

