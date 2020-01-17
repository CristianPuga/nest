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
const libro_1 = require("../../libro");
let ApiController = class ApiController {
    constructor() {
        this.libro1 = { id: 1, titulo: 'Los mundos magicos', autor: 'Charlestone A', fecha: new Date() };
        this.libro2 = { id: 2, titulo: 'Chamorron el piedras', autor: 'Welcome A', fecha: new Date() };
        this.libro3 = { titulo: 'Pilotes que son de bones', autor: 'Niño Mallorquino', fecha: new Date() };
        this.librosArray = [this.libro1, this.libro2];
    }
    getLibros() {
        return this.librosArray;
    }
    subirLibro() {
        return this.libro3;
    }
    getLibroId(params) {
        return this.librosArray.find((element) => element.id == params.id);
    }
    modificar(param, libro) {
        let index = this.librosArray.findIndex((e) => e.id == param.id);
        console.log(param.id);
        console.log(libro);
        this.librosArray[index] = libro;
        console.log(this.librosArray[index]);
        return libro;
    }
    deleteLibro(params) {
        let index = this.librosArray.findIndex((e) => e.id == params.id);
        this.librosArray.splice(index, 1);
        return this.librosArray;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ApiController.prototype, "getLibros", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", libro_1.Libro)
], ApiController.prototype, "subirLibro", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "getLibroId", null);
__decorate([
    common_1.Put(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, libro_1.Libro]),
    __metadata("design:returntype", libro_1.Libro)
], ApiController.prototype, "modificar", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ApiController.prototype, "deleteLibro", null);
ApiController = __decorate([
    common_1.Controller('api')
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map