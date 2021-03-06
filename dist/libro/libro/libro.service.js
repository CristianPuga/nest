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
const typeorm_1 = require("typeorm");
const libro_entity_1 = require("../libro.entity");
const typeorm_2 = require("@nestjs/typeorm");
let LibroService = class LibroService {
    constructor(libroRepository) {
        this.libroRepository = libroRepository;
    }
    save(libro) {
        return this.libroRepository.save(libro);
    }
    findById(id) {
        return this.libroRepository.findOne(id);
    }
    async delete(id) {
        const promesaObjeto = await this.libroRepository.findOne(id);
        return this.libroRepository.remove(promesaObjeto);
    }
};
LibroService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(libro_entity_1.Libro)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LibroService);
exports.LibroService = LibroService;
//# sourceMappingURL=libro.service.js.map