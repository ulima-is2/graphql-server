import { Field, Int, ObjectType } from "type-graphql";
import Equipo from "./Equipo"

@ObjectType()
export default class Calificacion
{
    @Field(type => Int)
    id : number

    @Field()
    nombre : string

    @Field(type => Equipo)
    equipo : Equipo

    @Field(type => Int)
    nota : number
}