"use strict";
// index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const EquipoResolver_1 = require("./resolvers/EquipoResolver");
const CalificacionResolver_1 = require("./resolvers/CalificacionResolver");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [EquipoResolver_1.default, CalificacionResolver_1.default],
            emitSchemaFile: true
        });
        const server = new graphql_yoga_1.GraphQLServer({
            schema: schema
        });
        server.start(() => {
            console.log("Servidor ejecutandose en el puerto 4000...");
        });
    });
}
init();
//# sourceMappingURL=index.js.map