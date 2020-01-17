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
const common_1 = require("@nestjs/common");
const libro_service_1 = require("./libro.service");
const libro_entity_1 = require("../libro.entity");
let LibroController = class LibroController {
    constructor(libroService) {
        this.libroService = libroService;
    }
    create(libro) {
        return this.libroService.save(libro);
    }
    findOne(id) {
        return this.libroService.findById(id);
    }
    async update(id, libro) {
        let dato = await this.libroService.findById(id);
        dato.titulo = libro.titulo;
        dato.autor = libro.autor;
        dato.fecha = libro.fecha;
        return this.libroService.save(dato);
    }
    remove(id) {
        return this.libroService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [libro_entity_1.Libro]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, libro_entity_1.Libro]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LibroController.prototype, "remove", null);
LibroController = __decorate([
    common_1.Controller('libro'),
    __metadata("design:paramtypes", [libro_service_1.LibroService])
], LibroController);
exports.LibroController = LibroController;
//# sourceMappingURL=libro.controller.js.map