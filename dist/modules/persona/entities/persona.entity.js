var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
let Persona = class Persona {
    id;
    nombres;
    apellidos;
    user;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Persona.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Persona.prototype, "nombres", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Persona.prototype, "apellidos", void 0);
__decorate([
    OneToOne('User', (user) => user.persona),
    JoinColumn(),
    __metadata("design:type", Object)
], Persona.prototype, "user", void 0);
Persona = __decorate([
    Entity()
], Persona);
export { Persona };
//# sourceMappingURL=persona.entity.js.map