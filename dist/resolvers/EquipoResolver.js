"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Equipo_1 = require("../schemas/Equipo");
const data_1 = require("../data/data");
let EquipoResolver = class EquipoResolver {
    equipoPorNombre(name) {
        // Codigo para obtener los datos
        return data_1.equipos.find(equipo => {
            return equipo.nombre === name;
        });
    }
    getEquipos() {
        return data_1.equipos;
    }
    calificaciones(equipoData) {
        return data_1.calificaciones.filter(calif => {
            return calif.equipoId == equipoData.id;
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => Equipo_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("nombre")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], EquipoResolver.prototype, "equipoPorNombre", null);
__decorate([
    type_graphql_1.Query(returns => [Equipo_1.default], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], EquipoResolver.prototype, "getEquipos", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EquipoResolver.prototype, "calificaciones", null);
EquipoResolver = __decorate([
    type_graphql_1.Resolver(of => Equipo_1.default)
], EquipoResolver);
exports.default = EquipoResolver;
//# sourceMappingURL=EquipoResolver.js.map