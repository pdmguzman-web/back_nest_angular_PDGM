import { DataSource } from 'typeorm';
import { Categoria } from './entities/categoria.entity.js';
export declare const categoriaProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Categoria>;
    inject: string[];
}[];
