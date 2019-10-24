// index.ts

import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import EquipoResolver from "./resolvers/EquipoResolver"
import CalificacionResolver from "./resolvers/CalificacionResolver"

async function init()
{
    const schema = await buildSchema({
        resolvers : [EquipoResolver, CalificacionResolver],
        emitSchemaFile : true
    })

    const server = new GraphQLServer({
        schema : schema
    })

    server.start(()=>{
        console.log("Servidor ejecutandose en el puerto 4000...")
    })
}

init()