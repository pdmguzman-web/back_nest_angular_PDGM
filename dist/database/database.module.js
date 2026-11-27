var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers.js';
import { ConfigService } from '../config/config.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    Module({
        imports: [
            TypeOrmModule.forRootAsync({
                imports: [ConfigModule],
                inject: [ConfigService],
                useFactory: (config) => ({
                    type: 'postgres',
                    host: config.get('HOST') || 'localhost',
                    port: +config.get('PORT_DB'),
                    username: config.get('USERNAME') || 'root',
                    password: config.get('PASSWORD') || 'prueba',
                    database: config.get('DATABASE'),
                    entities: [
                        __dirname + '/../**/*.entity{.ts,.js}',
                    ],
                }),
            }),
        ],
        providers: [...databaseProvider, ConfigService],
        exports: [...databaseProvider],
    })
], DatabaseModule);
export { DatabaseModule };
//# sourceMappingURL=database.module.js.map