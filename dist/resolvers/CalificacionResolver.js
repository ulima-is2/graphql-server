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
const Calificacion_1 = require("../schemas/Calificacion");
const data_1 = require("../data/data");
let CalificacionResolver = class CalificacionResolver {
    getCalificacionesByNombre(nombreCalificacion) {
        // Obtenemos las calificaciones por nombre de calificacion
        return data_1.calificaciones.filter(calif => {
            return calif.nombre == nombreCalificacion;
        });
    }
    ponerNota(calificacionId, nota) {
        const calificacion = data_1.calificaciones.find(calif => {
            return calif.id == calificacionId;
        });
        // Validamos que no se encuentre una calificacion
        if (!calificacion) {
            throw new Error(`No se pudo encontrar una calificacion con el id: ${calificacionId}`);
        }
        calificacion.nota = nota;
        return calificacion;
    }
    equipo(calificacionData) {
        // Obtenemos el equipo que se tenia definido
        return data_1.equipos.find(equipo => equipo.id == calificacionData.equipoId);
    }
};
__decorate([
    type_graphql_1.Query(returns => [Calificacion_1.default], { nullable: true }),
    __param(0, type_graphql_1.Arg("nombreCalificacion")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], CalificacionResolver.prototype, "getCalificacionesByNombre", null);
__decorate([
    type_graphql_1.Mutation(returns => Calificacion_1.default),
    __param(0, type_graphql_1.Arg("calificacionId")), __param(1, type_graphql_1.Arg("nota")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], CalificacionResolver.prototype, "ponerNota", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CalificacionResolver.prototype, "equipo", null);
CalificacionResolver = __decorate([
    type_graphql_1.Resolver(of => Calificacion_1.default)
], CalificacionResolver);
exports.default = CalificacionResolver;
//# sourceMappingURL=CalificacionResolver.js.map