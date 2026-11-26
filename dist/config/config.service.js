var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'dotenv';
let ConfigService = class ConfigService {
    envConfig;
    constructor() {
        const env = process.env.NODE_ENV || 'development';
        const envFilePath = path.join(process.cwd(), `.env.${env}`);
        console.log('**********', env);
        console.log('**********', envFilePath);
        const existsPath = fs.existsSync(envFilePath);
        if (!existsPath) {
            console.log(`.env.${env} no existe ${env.toUpperCase()}`);
            process.exit(0);
        }
        this.envConfig = parse(fs.readFileSync(envFilePath));
    }
    get(key) {
        return this.envConfig[key];
    }
};
ConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map